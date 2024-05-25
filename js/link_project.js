// https://api.github.com/users/Matteo-K/repos

/* Prend le nom de tout les répertoires */

suggestions.forEach(element => {

    if (/\.html$/.test(element.lien)) {
        fetch("../json/" + element.projet_ + ".json")
        .then(response => {
            if (response.ok) {
                response.json().then(file => {
                    // Affiche le contenu du fichier JSON
                    console.log(file);
                });
            } else {
                console.log("fichier"+element.projet_+".json non trouvé");
            }
            
        });
    }    
});