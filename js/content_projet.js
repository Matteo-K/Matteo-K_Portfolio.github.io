const urlParams = new URLSearchParams(window.location.search);
const projet = urlParams.get("projet");

let main = document.querySelector("main");
let title = document.querySelector("title");

fetch("https://matteo-k.github.io/Matteo-K_Portfolio.github.io/json/" + projet + ".json")
.then(response => {
    if (response.ok) {
        response.json().then(file => {
            title.innerText = file[1].title;

            let card = `
                <article id="art_presentation">
                <nav>
                    <ul>
            `;
            let size = file[1].content[0].content.length;
            console.log(file);
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
                        <a href="index.html" class="depot">Zone de dépot</a>
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
            `
            
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
                        <img src="" alt="">
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
            for (let index = 0; index < array.length; index++) {
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
                </section>
            </article>
            <article>
                <nav>
                    <ul>
                        <li>
                            <a href="#etape1">
                                Étape 1
                            </a>
                        </li>
                        <li>
                            <a href="#etape2">
                                Étape 2
                            </a>
                        </li>
                        <li>
                            <a href="#etape3">
                                Étape 3
                            </a>
                        </li>
                        <li>
                            <a href="#etape4">
                                Étape 4
                            </a>
                        </li>
                    </ul>
                </nav>
                <h6>
                    Étape de réalisation
                </h6>
                <section>
                    <h3>
                        Étape 1
                    </h3>
                </section>
                <section>
                    <h3>
                        Étape 2
                    </h3>
                </section>
                <section>
                    <h3>
                        Étape 3
                    </h3>
                </section>
                <section>
                    <h3>
                        Étape 4
                    </h3>
                </section>
            </article>
            `;
           
            console.log(card);
                  
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