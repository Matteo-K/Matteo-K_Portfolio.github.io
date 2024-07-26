const urlParams = new URLSearchParams(window.location.search);
const projet = urlParams.get("projet");

let main = document.querySelector("main");
let title = document.querySelector("title");
let text_size, size, link_size;

fetch("json/" + projet + ".json").then((response) => {
  if (response.ok) {
    response.json().then((file) => {
      title.innerText = file.title;

      let card = `
                    <h3>
                        ${file.title}
                    </h3>
            `;
      card += `
            <time>
                ${file.date}
            </time>
            `;
      if (file.presentation.image !== undefined) {
        card += `
                    <img src="${file.presentation.image.lien}" alt="${file.presentation.image.alt}" title="${file.presentation.image.title}">
                `;
      } else if (file.presentation.video !== undefined) {
        card += `
                    <video
                    width="480"
                    controls
                    poster="${file.presentation.video.poster}">
                    <source
                        src="${file.presentationvideo.lien}"
                        type="video/mp4" />
                    Votre navigateur ne permet pas de lire les vidéos.
                    </video>

                `;
      } else if (file.presentation.iframeYT !== undefined) {
        card += `
                    <div>
                        <iframe 
                            src="${file.presentation.iframeYT}" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                        <p> Double cliquez ou appuyez sur 'f' pour mettre en grand écran </p>
                    </div>
                `;
      }
      card += `
                    <section id="lienPratique">
                        <h4>
                            Lien pratique
                        </h4>
                        <div>
                            <a href="index.html#portfolio">
                                &lt;&nbsp;Retour au Menu
                            </a>
                            <a href="${file.depot}" target="blank_">
                                <img src="images/reseau/github.png" alt="depot" title="depot">
                                <span>Zone de dépot</span>
                            </a>
                    `;
      if (file.site !== undefined) {
        card += `
                        <a href="${file.site}" target="blank_">
                            Visiter le site
                        </a>
                        `;
      }
      card += `        
                        </div>
                    </section>
                    <section id="description">
                        <h4>
                            Description
                        </h4>
                        <p>
                            ${file.presentation.description}
                        </p>
                    </section>
                `;
      card += `
                    <section id="objectifs">
                        <h4>
                            Objectif(s)
                        </h4>
                        <ul>
                    `;
      file.presentation.objectifs.forEach((element) => {
        card += `
                            <li>
                                ${element}
                            </li>
                        `;
      });
      card += `
                        </ul>
                    </section>
                    <div>
                `;
      if (file.presentation.langage !== undefined) {
        card += `
                    <section id="langage">
                        <h4>
                            Technologie(s)
                        </h4>
                        <ul>
                    `;
        file.presentation.langage.forEach((element) => {
          card += `
                            <li>
                                <img src="images/logo/technologies/${element}.png" alt="${element}" title="${element}">    
                            </li>
                        `;
        });
        card += `
                        </ul>
                    </section>
                    `;
      }
      card += `
                <section id="competence_developpe">
                    <h4>
                        Compétences développées
                    </h4>
                    <ul>
                `;
      file.presentation.competence_developpe.forEach((element) => {
        card += `
                        <li>
                            ${element}
                        </li>
                    `;
      });
      card += `
                    </ul>
                </section>
            </div>
                `;

      let article1 = document.createElement("article");
      article1.setAttribute("id", "art_presentation_project");
      article1.innerHTML = card;
      main.appendChild(article1);

      card = `
                <h3>
                    Étape de réalisation
                </h3>
            `;
      size = file.etape.length;
      for (let index = 0; index < size; index++) {
        card += `
                    <section id="etape${index + 1}">
                        <h4>
                `;
        if (typeof file.etape[index].titre === "undefined") {
          card += `
                        Étape ${index + 1}
                    `;
        } else {
          card += `
                        Étape ${index + 1} : ${file.etape[index].titre}
                    `;
        }

        card += `
                        </h4>
                        <p>
                `;

        text_size = file.etape[index].text.length;
        for (let index_text = 0; index_text < text_size; index_text++) {
          card += `
                        ${file.etape[index].text[index_text]}<br>
                    `;
        }
        card += `
                    </p>
                `;
        if (file.etape[index].lien.length != 0) {
          card += `
                        <div>
                            <span>
                                Source :
                            </span>
                        `;
          link_size = file.etape[index].lien.length;
          for (let index_lien = 0; index_lien < link_size; index_lien++) {
            card += `
                            <a href="${file.etape[index].lien[index_lien].lien}" target="blank_">
                                ${file.etape[index].lien[index_lien].nom}
                            </a>
                        `;
          }
          card += `
                        </div>
                    `;
        }
        card += `
                    </section>
                `;
      }
      card += `
                </article>
            `;

      let article2 = document.createElement("article");
      article2.setAttribute("id", "art_etape");
      article2.innerHTML = card;
      main.appendChild(article2);
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

    main.insertAdjacentHTML("beforeend", card);
  }
});
