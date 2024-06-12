const urlParams = new URLSearchParams(window.location.search);
const projet = urlParams.get("projet");

let main = document.querySelector("main");
let title = document.querySelector("title");
let text_size, size, link_size;

fetch("json/" + projet + ".json")
.then(response => {
    if (response.ok) {
        response.json().then(file => {
            title.innerText = file[1].title;

            let card = `
                <article id="${file[1].content[0].article}">
                <nav>
                    <ul>
            `;
            size = file[1].content[0].content.length;
            for (let index = 0; index < size; index++)  {
                if (index != 1 || file[1].content[0].content[1].ul.length != 0) {
                    card += `
                        <li>
                            <a href="#${file[1].content[0].content[index].id}">
                                ${file[1].content[0].content[index].section}
                            </a>
                        </li>
                    `;
                }
                
            };
            card += `
                    </ul>
                </nav>
                <h6>
                    Présentation ${file[1].title}
                </h6>
                <div class="section" id="${file[1].content[0].content[0].id}">
                    <div>
                        <a href="index.html#art_portfolio" class="retourMenu">&lt;&lt;&lt; Retour au menu</a>
                        <a href="${file[1].depot}" class="depot">Zone de dépot</a>
                    </div>
                    <section>
                        <h3>
                            Présentation
                        </h3>
                        <p>
                            ${file[1].content[0].content[0].texte}
                        </p>
                    </section>
                </div>
            `;
            
            if (file[1].content[0].content[1].ul.length != 0) {
                card += `
                    <div class="section" id="${file[1].content[0].content[1].id}">
                        <section>
                            <ul>
                `
                size = file[1].content[0].content[1].ul.length;
                for (let index = 0; index < size; index++) {
                    card += `
                        <li>
                            ${file[1].content[0].content[1].ul[index]}
                        </li>
                    `;
                }
                card += `
                            </ul>
                        </section>
                `;

                if (typeof file[1].content[0].content[1].image === "object") {
                    card += `
                        <img src="${file[1].content[0].content[1].image.lien}" alt="${file[1].content[0].content[1].image.alt}" title="${file[1].content[0].content[1].image.title}">
                    `;
                } else {
                    card += `
                        <video
                        width="480"
                        controls
                        poster="${file[1].content[0].content[1].video.poster}">
                        <source
                            src="${file[1].content[0].content[1].video.lien}"
                            type="video/mp4" />
                        Votre navigateur ne permet pas de lire les vidéos.
                        </video>

                    `;
                }
                    

                card += `
                    </div>
                `;
            }
            
            card += `
                <section id="${file[1].content[0].content[2].id}">
                    <h3>
                        Objectif
                    </h3>
                    <div>
                        <h4>
                            Objectif attendu
                        </h4>
                        <ul>
            `
            size = file[1].content[0].content[2].ul_attendu.length;
            for (let index = 0; index < size; index++) {
                card += `
                    <li>
                        ${file[1].content[0].content[2].ul_attendu[index]}
                    </li>
                `;
            }
            card += `
                        </ul>
                    </div>
                    <div>
                        <h4>
                            Obectif réaliser
                        </h4>
                        <ul>
            `
            size = file[1].content[0].content[2].ul_realiser.length;
            for (let index = 0; index < size; index++) {
                card += `
                    <li>
                        ${file[1].content[0].content[2].ul_realiser[index]}
                    </li>
                `;
            }
            card += `
                    </div>
                </section>
                <section id="${file[1].content[0].content[3].id}">
                    <h3>
                        Compétence développé
                    </h3>
                    <ul>
            `
            size = file[1].content[0].content[3].ul.length;
            for (let index = 0; index < size; index++) {
                card += `
                    <li>
                        ${file[1].content[0].content[3].ul[index]}
                    </li>
                `;
            }
            card += `
                    </ul>
                </section>
            </article>
            <article id="${file[1].content[1].article}">
                <nav>
                    <ul>
            `;
            size = file[1].content[1].content.length;
            for (let index = 0; index < size; index++)  {
                card += `
                    <li>
                        <a href="#etape${index+1}">
                            Étape ${index+1}
                        </a>
                    </li>
                `;
            };
            card += `
                    </ul>
                </nav>
                <h6>
                    Étape de réalisation
                </h6>
            `;
            size = file[1].content[1].content.length;
            for (let index = 0; index < size; index++)  {
                card += `
                    <section id="etape${index+1}">
                        <h3>
                `;
                if (typeof file[1].content[1].content[index].titre === "undefined") {
                    card += `
                        Étape ${index+1}
                    `;
                } else {
                    card += `
                        Étape ${index+1} : ${file[1].content[1].content[index].titre}
                    `;
                }
                
                 
                card += `
                        </h3>
                        <p>
                `;

                text_size = file[1].content[1].content[index].text.length
                for (let index_text = 0; index_text < text_size; index_text++) {
                    card += `
                        ${file[1].content[1].content[index].text[index_text]}<br>
                    `;
                }
                card += `
                    </p>
                `;
                if (file[1].content[1].content[index].lien.length != 0) {
                    card += `
                            <span>
                                Source:
                            </span>
                        `;
                    link_size = file[1].content[1].content[index].lien.length
                    for (let index_lien = 0; index_lien < link_size; index_lien++) {
                        card += `
                            <a href="${file[1].content[1].content[index].lien[index_lien].lien}">
                                ${file[1].content[1].content[index].lien[index_lien].nom}
                            </a>
                        `;
                    } 
                }
                card += `
                    </section>
                `;
            };
            card += `
                </article>
            `;
                  
            main.insertAdjacentHTML('beforeend', card);
        });
    } else {
        title.innerText = "Erreur 404";

        let card = `
        <article class="erreur404">
            <img src="images/logo/erreur404.png" alt="erreur404">
            <br>
            <h2>
                <span>Erreur 404 :<br></span>
                Oups&nbsp;... Page ${projet} non trouvé
            </h2>
            <a href="index.html">Retour à la page d'aceuil</a>
        </article>
        `;

        main.insertAdjacentHTML('beforeend', card);
    }
});