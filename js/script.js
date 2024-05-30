/* Déplacement de la souris */

const mousse_ = document.querySelector('.mousemove');

window.addEventListener('mousemove',(event) => {
    mousse_.style.left = event.pageX + "px";
    mousse_.style.top = event.pageY + "px";
});

window.addEventListener('mousedown',() => {
    mousse_.style.transform ="scale(1.5) translate( -25%, -25%)";
    mousse_.style.borderColor ="red";
});

window.addEventListener('mouseup',() => {
    mousse_.style.transform ="scale(1) translate(-50%, -50%)";
    mousse_.style.borderColor = window.getComputedStyle(document.querySelector(':root')).getPropertyValue("--clr-nav-bg--");
});

/* ### Menu navigation ### */
/* -- ouvre et ferme le menu à l'intéraction du bouton du menu -- */

const menu_click = document.querySelector('aside nav:nth-child(1) i')

menu_click.addEventListener('click',() => {
    open_close_aside();
});

/* -- ferme le aside quand la souris sors du aside */

const aside_nav = document.querySelector("aside");

aside_nav.addEventListener("mouseleave", () => {
    if (aside_nav.classList[0] == 'aside_open') {
        open_close_aside();
    }
    
});

/* afficher le bloc parcours */
try {
    const lien_parcours = document.querySelector("#presentation div + a");
    const parcours = document.querySelector("#parcours");

    let parcours_compteur = 0;

    lien_parcours.addEventListener("click", () => {
        if (parcours_compteur%2 == 0) {
            parcours.style.display = "flex";
            parcours.style.opacity = "1";
        } else {
            parcours.style.display = "none"; 
            parcours.style.opacity = "0";
        }
        parcours_compteur++;
    });
} catch (error) {
    console.log("pas de bloc parcours (disposition des blocs");
}


/* Gérer les couleurs des infographie */

try {
    let color_inf, match;

    const point_infographie = document.querySelectorAll(".point");
    const detail_infographie = document.querySelectorAll(".hist, .hist h4, .hist h5");
    const hist = document.querySelectorAll(".hist");
    let infographie_size = point_infographie.length;
    let detail_proportion = detail_infographie.length/infographie_size;

    let color_box = [];

    for (let index = 0; index < infographie_size; index++) {
        const currentPoint = point_infographie[index];
        if (currentPoint instanceof Element) {
            color_inf = window.getComputedStyle(currentPoint).getPropertyValue("border-color");
            match = /rgb\((.*)\)/.exec(color_inf);
            color_box.push(match[1]);
            detail_infographie[index * detail_proportion].style.border = "3px solid " + color_inf;
            detail_infographie[(index * detail_proportion) + 1].style.color = color_inf;
            detail_infographie[(index * detail_proportion) + 2].style.color = "rgb(" + color_box[index] + ", 0.6)";
            hist[index].style.boxShadow = "rgb(" + match[1] + ", 0.6) 5px 5px";
            hist[index].addEventListener("mouseover", () => {
                hist[index].style.boxShadow = "rgb(" + color_box[index] + ", 0.6) 2px 2px";
            });
            hist[index].addEventListener("mouseleave", () => {
                hist[index].style.boxShadow = "rgb(" + color_box[index] + ", 0.6) 5px 5px";
            });
        }
    }
} catch (error) {
    console.log("pas de graph parcours (Couleur des blocs)")
}

function open_close_aside() {
    aside_nav.classList.toggle('aside_open');
    const mnu = document.querySelectorAll('aside span + span');
    mnu.forEach(element => {
        element.classList.toggle('span_visible');
    });

    const titl = document.querySelectorAll('aside h2');
    titl.forEach(element => {
        element.classList.toggle('span_visible');
    });
}

/* Sélection du format CV */
try {
    const downloadCV = document.querySelector('form');
    downloadCV.addEventListener("submit", (e) => {
        const data = new FormData(downloadCV);
        // Prend le format entrer dans le form
        for (const entry of data) {
            var lien = document.querySelector('form a');
            // sélectionne le format à télécharger
            switch (entry[1]) {
                case "PDF":
                    lien.setAttribute("href","images/cv/CV_kervadecMatteo.pdf");
                    lien.setAttribute("download","CV_kervadecMatteo.pdf");
                break;
                case "PNG":
                    lien.setAttribute("href","images/cv/CV_kervadecMatteo.png");
                    lien.setAttribute("download","CV_kervadecMatteo.png");
                break;
                case "JPG":
                    lien.setAttribute("href","images/cv/CV_kervadecMatteo.jpg");
                    lien.setAttribute("download","CV_kervadecMatteo.jpg");
                break;

                default:
                    alert("format inconnu");
                    break;
            }
            lien.click();
        }
        e.preventDefault();
    },false);   
} catch (error) {
    console.log("pas de cv");
}

/* Bloc de compétence de portfolio */

const list_comp = document.querySelectorAll("#list_competence_project div");
const list_comp_titre = document.querySelectorAll("#list_competence_project h2");

for (let index = 0; index < list_comp.length; index++) {
    list_comp_titre[index].addEventListener("click", () => {
        list_comp[index].classList.toggle("list_open");
    });
};

