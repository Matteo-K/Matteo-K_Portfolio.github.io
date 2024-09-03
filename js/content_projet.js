const urlParams = new URLSearchParams(window.location.search);
const projet = urlParams.get("projet");

let main = document.querySelector("main");
let title = document.querySelector("title");
let text_size, size, link_size;

fetch("json/projets.json").then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      let size = data.length;
      let index = 0;
      let trouver = false;
      while (index < size && !trouver) {
        if (data[index].title == projet) {
          trouver = true;
        } else {
          index++;
        }
      }
      if (trouver) {
        title.innerText = data[index].title;

        let card = `
                    <h3>
                        ${data[index].title}
                    </h3>
            `;
        card += `
            <time>
                ${data[index].date}
            </time>
            `;
        if (data[index].presentation.image !== undefined) {
          card += `
                    <img src="${data[index].presentation.image.lien}" alt="${data[index].presentation.image.alt}" title="${data[index].presentation.image.title}">
                `;
        } else if (data[index].presentation.video !== undefined) {
          card += `
                    <video
                    width="480"
                    controls
                    poster="${data[index].presentation.video.poster}">
                    <source
                        src="${data[index].presentationvideo.lien}"
                        type="video/mp4" />
                    Votre navigateur ne permet pas de lire les vidéos.
                    </video>

                `;
        } else if (data[index].presentation.iframeYT !== undefined) {
          card += `
                    <div>
                        <iframe 
                            src="${data[index].presentation.iframeYT}" 
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
                            <a href="${data[index].depot}" target="blank_">
                                <img src="images/reseau/github.png" alt="depot" title="depot">
                                <span>Zone de dépot</span>
                            </a>
                    `;
        if (data[index].site !== undefined) {
          card += `
                        <a href="${data[index].site}" target="blank_">
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
                            ${data[index].presentation.description}
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
        data[index].presentation.objectifs.forEach((element) => {
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
        if (data[index].presentation.langage !== undefined) {
          card += `
                    <section id="langage">
                        <h4>
                            Technologie(s)
                        </h4>
                        <ul>
                    `;
          data[index].presentation.langage.forEach((element) => {
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
        data[index].presentation.competence_developpe.forEach((element) => {
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
        size = data[index].etape.length;
        for (let idx = 0; idx < size; idx++) {
          card += `
                    <section id="etape${idx + 1}">
                        <h4>
                `;
          if (typeof data[index].etape[idx].titre === "undefined") {
            card += `
                        Étape ${idx + 1}
                    `;
          } else {
            card += `
                        Étape ${idx + 1} : ${data[index].etape[idx].titre}
                    `;
          }

          card += `
                        </h4>
                        <p>
                `;

          text_size = data[index].etape[idx].text.length;
          for (let index_text = 0; index_text < text_size; index_text++) {
            card += `
                        ${data[index].etape[idx].text[index_text]}<br>
                    `;
          }
          card += `
                    </p>
                `;
          if (data[index].etape[idx].lien) {
            card += `
                        <div>
                            <span>
                                Source :
                            </span>
                        `;
            link_size = data[index].etape[idx].lien.length;
            for (let index_lien = 0; index_lien < link_size; index_lien++) {
              card += `
                            <a href="${data[index].etape[idx].lien[index_lien].lien}" target="blank_">
                                ${data[index].etape[idx].lien[index_lien].nom}
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
  }
});
