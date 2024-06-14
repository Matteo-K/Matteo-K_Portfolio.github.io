let bloc;
let projet;
let contributeurs;

const select = document.querySelector("select");
select.addEventListener("change",function() {
    const bloc = document.querySelector("#portfolio ul");

    while (bloc.firstChild) {
        bloc.removeChild(bloc.firstChild);
    }

    const index_select = this.selectedIndex;
    switch (index_select) {
        case 0:
            select.style.backgroundColor = "#666";
            break;
        case 1:
            select.style.backgroundColor = "red";
            break;
        case 2:
            select.style.backgroundColor = "orange";
            break;
        case 3:
            select.style.backgroundColor = "yellow";
            break;
        case 4:
            select.style.backgroundColor = "lightgreen";
            break;
        case 5:
            select.style.backgroundColor = "blue";
            break;
        case 6:
            select.style.backgroundColor = "black";
            break;
        case 7:
            select.style.backgroundColor = "pink";
            break;
        default:
            break;
    }
    
    suggestions.forEach(element => {
        if (/\.html/.test(element.lien)) {
            fetch("json/" + element.projet_ + ".json")
            .then(response => {
                if (response.ok) {
                    response.json().then(file => {
                        // Affiche le contenu du fichier JSON
                        file[0].compétence.forEach(element => {
                            if (element == index_select) {
                                projet = `
                                    <li style="background-image : url(${file[0].image.lien});">
                                        <a href="projet.html?projet=${file[0].title}"> 
                                            <h3>
                                                ${file[0].title}
                                            </h3>
                                            <div>
                                                <span>
                                                    Contributeur&nbsp;:
                                                </span>
                                                <span>
                                                 `;
                                                file[0].contributeur.forEach(element => {
                                                    projet += `<span>${element}</span>`;
                                                });
                                                projet += `
                                                </span>
                                            </div>
                                            <time>
                                                ${file[0].date}
                                            </time>
                                        </a>
                                    </li>
                                `;
                                bloc.insertAdjacentHTML('beforeend', projet);
                            }
                        });
                    });
                } else {
                    console.log("fichier "+element.projet_+".json non trouvé");
                }
                
            });
        }    
    });
});
