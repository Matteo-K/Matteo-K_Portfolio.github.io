const urlParams = new URLSearchParams(window.location.search);
const projet = urlParams.get("projet");

let main = document.querySelector("main");
let title = document.querySelector("title");

fetch("https://matteo-k.github.io/Matteo-K_Portfolio.github.io/json/" + projet + ".json")
.then(response => {
    if (response.ok) {
        response.json().then(file => {
            title.innerText = file[1].title;

            let card = ``;

            file[1].content.forEach(element => {
                console.log(element);
                card += `
                    <article>
                `;
                file[1].content
            });

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