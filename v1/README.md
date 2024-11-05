# Portfolio

## Objectif/Idée

- établir un site web en 3 mois.
- Créer une représentation visuel approximatif pour se donner une idée du rendue final
- Utiliser l'api de github

## Conception

### Représentation graphique

Utilisation du logiciel figma

https://www.figma.com/design/PEORQaCJZNJELGpY5JEGaK/Portfolio?node-id=24-71&t=FBF56QQnp0dA0WCN-1

## Développement

### Langage 

- Contenue :
  - Html
  - Json
- Style :
  - Css
- Contenue dynamique :
  - Javascript

### Json

Les fichiers json contiennent le contenue des projets. Ils contient les avancées, le contenue réaliser, le lien vers le répertoire qui contient les fichiers, le détail du projet, l'explication du projet et comment je l'ai réaliser.
Le but à travers les fu=ichiers json est de générer automatiquement le pages d'après leur contenue.

### Api

Le but de cette api serait de rechercher les fichiers Json des répertoires de github avec une api GET.
Le problème étant que le nombre de requète maximum et de 60 par heure. Or un utilisateur lambda chargerait N le nombre de répertoire à chaque fois que le fichier se charge. 
Alors cela dépasserais le nombre de requête possible. Et cela serait très peux optimiser. Sur une faible connexion à un internet, cela prendrait beaucoup de temps.

### Solution

Ajouté au furé-à-mesure les fichiers Json dans le projet Portfolio.
