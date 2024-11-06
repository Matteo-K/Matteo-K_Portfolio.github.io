#!/bin/bash

# Chemin vers le fichier JSON
repertoire="php/project/"
input_file="php/json/data.json"
default_file=$repertoire"default.php"
# Vérifier si le fichier par défaut existe
if [[ ! -f $default_file ]]; then
    echo "Le fichier $default_file n'existe pas."
    exit 1
fi

# Parcourir chaque entrée dans le fichier JSON
jq -c '.[]' "$input_file" | while read -r project; do
    # Extraire le titre et d'autres données
    title=$(echo "$project" | jq -r '.title')

    # Si le titre est "default", on ne copie pas le fichier
    if [ "$title" != "default" ]; then
        # Créer le nom de fichier PHP
        php_file="${title}.php"

        # Copier le contenu de default.php dans le nouveau fichier
        cp "$default_file" "$repertoire$php_file"

        echo "Fichier créé : $php_file"
    fi
done

