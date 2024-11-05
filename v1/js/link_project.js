let projet;
let contributeurs;
let nom_element_projet;

const select = document.querySelector("select");
select.addEventListener("change", function () {
  const bloc = document.querySelector("#portfolio ul");

  /* retire tout les projets de la liste */
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

  fetch("json/projets.json").then((response) => {
    if (response.ok) {
      response.json().then((file) => {
        file
          .filter((element) => {
            return element.selectionner;
          })
          .map((elmnt) => {
            elmnt.compétence.forEach((element) => {
              if (element == index_select) {
                projet = `
                                    <h3>
                                        ${elmnt.title}
                                    </h3>
                                    <div>
                                        <span>
                                            Contributeur&nbsp;:
                                        </span>
                                        <span>
                                            `;
                elmnt.contributeur.forEach((element) => {
                  projet += `<span>${element}</span>`;
                });
                projet += `
                                        </span>
                                    </div>
                                    <time>
                                        ${elmnt.date}
                                    </time>
                                `;
                let projetElement = document.createElement("li");
                projetElement.style.backgroundImage =
                  "url(" + elmnt.image.lien + ")";
                projetElement.setAttribute(
                  "onclick",
                  "window.location.href='projet.html?projet=" + elmnt.lien + "'"
                );
                projetElement.innerHTML = projet;
                bloc.appendChild(projetElement);

                const h3_projet = projetElement.querySelector("h3");
                const div_projet = projetElement.querySelector("div");
                const time_projet = projetElement.querySelector("time");
                projetElement.addEventListener("mouseenter", () => {
                  h3_projet.style.textAlign = "right";
                  div_projet.style.opacity = "1";
                  time_projet.style.opacity = "1";
                });

                projetElement.addEventListener("mouseleave", () => {
                  h3_projet.style.textAlign = "center";
                  div_projet.style.opacity = "0";
                  time_projet.style.opacity = "0";
                });
              }
            });
          });
      });
    }
  });
});
