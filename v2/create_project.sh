#!/bin/bash
# sudo apt-get install jq

# Chemin vers le fichier JSON
input_file="data.json"
default_file="default.php"

# Vérifier si le fichier par défaut existe
if [[ ! -f "$default_file" ]]; then
    echo "Le fichier $default_file n'existe pas."
    exit 1
fi

# Parcourir chaque entrée dans le fichier JSON
jq -c '.[]' "$input_file" | while read -r project; do
    # Extraire le titre et d'autres données
    title=$(echo "$project" | jq -r '.title')
    
    # Créer le nom de fichier PHP
    php_file="${title}.php"
    
    # Copier le contenu de default.php dans le nouveau fichier
    cp "$default_file" "$php_file"
    
    # Ajouter des données spécifiques au projet dans le fichier PHP
    {
        echo "<?php"
        echo "// Fichier généré pour le projet $title"
        echo "\$title = '$title';"
        echo "\$selectionner = $(echo "$project" | jq -r '.selectionner');"
        echo "echo 'Titre du projet : ' . \$title;"
        echo "echo 'Sélectionné : ' . \$selectionner;"
        echo "?>"
    } >> "$php_file"

    echo "Fichier créé : $php_file"
done
