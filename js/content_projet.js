const urlParams = new URLSearchParams(window.location.search);
const projet = urlParams.get("projet");

let card;
let main = document.querySelector("main");
let title = document.querySelector("title");

console.log(window.location.href);

fetch("https://matteo-k.github.io/Matteo-K_Portfolio.github.io/json/" + projet + ".json")
.then(response => {
    if (response.ok) {
        console.log(response);
        response.json().then(file => {
            title.innerText = file[1].title;

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
            console.log("ajout dela carte " +projet);
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
        console.log("erreur 404");
    }
    main.insertAdjacentHTML('beforeend', card);
});