const urlParams = new URLSearchParams(window.location.search);
const projet = urlParams.get("projet");

let card;
let main = document.querySelector("main");
let title = document.querySelector("title");

fetch("../json/" + projet + ".json")
.then(response => {
    if (response.ok) {
        response.json().then(file => {
            title.innerText = file[1].title;

            card = `
                <article>
                    Hello World
                </article>
            `;

        });
    } else {
        title.innerText = "Erreur 404";

        card = `
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
    }
    main.insertAdjacentHTML('beforeend', card);
});