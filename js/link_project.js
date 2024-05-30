let bloc;
let projet;
let contributeurs;

suggestions.forEach(element => {
    if (/\.html/.test(element.lien)) {
        fetch("../json/" + element.projet_ + ".json")
        .then(response => {
            if (response.ok) {
                response.json().then(file => {
                    // Affiche le contenu du fichier JSON
                    projet = `
                        <li>
                            <a href="projet.html?projet=${file[0].title}"> 
                                <h3>
                                    ${file[0].title}
                                </h3>
                                <figure>
                                    <img src="${file[0].image.lien}" alt="${file[0].image.alt}" title="${file[0].image.title}">
                                    <figcaption>
                                        <span>
                                            Contributeur&nbsp;:
                                        </span><br>
                                        <span>
                                            ${file[0].contributeur}
                                        </span>
                                        <time>
                                            ${file[0].date}
                                        </time>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    `   
                    bloc = document.querySelector("#list_competence_project div:nth-child("+file[0].compétence+") ul");
                    bloc.insertAdjacentHTML('beforeend', projet);

                });
            } else {
                console.log("fichier "+element.projet_+".json non trouvé");
            }
            
        });
    }    
});