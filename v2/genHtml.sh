#!/bin/bash

# Dossier par défaut
dossierDefaut="php"

# Vérifie si des arguments ont été fournis
if [ $# -eq 0 ]; then
    # Aucun argument fourni, générer tous les fichiers PHP dans le dossier par défaut
    echo "Aucun argument fourni. Génération de tous les fichiers PHP dans le dossier '$dossierDefaut'."
    fichiers=( "$dossierDefaut"/*.php )
else
    # Initialise les variables
    dossier="$dossierDefaut"
    fichiers=()

    # Parcourir les arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -d)
                # Vérifie si un dossier est fourni après -d
                if [[ -n $2 ]]; then
                    dossier="$2"
                    shift 2 # Passe à l'argument suivant
                else
                    echo "Erreur : Aucune valeur fournie après -d. Génération de tous les fichiers PHP dans le dossier '$dossier'."
                    fichiers=( "$dossier"/*.php )
                    break
                fi
                ;;
            *)
                # Ajoute le fichier à la liste
                fichiers+=("$1")
                shift
                ;;
        esac
    done

    # Si aucun fichier n'est spécifié et qu'on a spécifié -d, générer tous les fichiers dans le nouveau dossier
    if [ ${#fichiers[@]} -eq 0 ]; then
        echo "Aucun fichier spécifié. Génération de tous les fichiers PHP dans le dossier '$dossier'."
        fichiers=( "$dossier"/*.php )
    fi
fi

# Parcourt chaque fichier et effectue la conversion
for fichier in "${fichiers[@]}"; do
    # Vérifie si le fichier existe
    if [ ! -f "$fichier" ]; then
        echo "Erreur : Le fichier '$fichier' n'existe pas."
        continue
    fi

    # Exécute le fichier PHP et redirige la sortie vers un fichier HTML
    nomFichier=$(basename "$fichier" .php)
    php "$fichier" > "$nomFichier.html"

    echo "Généré : $nomFichier.html"
done
