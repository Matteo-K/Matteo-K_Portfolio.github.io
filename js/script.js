/* Souris qui bouge */

const linkStatic = document.getElementById('link_static');

document.addEventListener('mousemove', function(e) {
  // Déplacer l'objet avec la souris
  linkStatic.style.left = e.pageX + 'px';
  linkStatic.style.top = e.pageY + 'px';

  // Faire tourner l'image lorsque la souris se déplace de gauche à droite
  if (e.movementX > 0) {
    linkStatic.classList.add('rotation');
  } else {
    linkStatic.classList.remove('rotation');
  }
});


/* ### Menu navigation ### */
/* -- ouvre et ferme le menu à l'intéraction du bouton du menu -- */

let open_menu = 0;

document.querySelector('header div + img').addEventListener('click',() => {
    if (open_menu == 0) {
        aside_nav.style.transform = "translate(0)"; 
    } else {
        aside_nav.style.transform = "translate(100%)"; 
    }
    open_menu = (open_menu + 1)%2;
});   

/* -- ferme le aside quand la souris sors du aside */
const aside_nav = document.querySelector("aside");

aside_nav.addEventListener("mouseleave", () => {
    aside_nav.style.transform = "translate(100%)";
    open_menu = (open_menu + 1)%2;
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


/* Gérer les couleurs des infographie*/

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


/* Apparition scroll */

const images_about_me = document.querySelector("#aboutMe img");
const images_cv = document.querySelector("#cv img");
const form_cv = document.querySelector("#cv form");
const techno = document.querySelectorAll("#technologies li:not(p + ul li)");


window.addEventListener('scroll',() => {
    try {
        if (window.scrollY > 450) {
            images_about_me.style.transform = "translate(0) rotate(5deg)";
            images_about_me.style.opacity = "1";
        } else {
            images_about_me.style.transform = "translate(100px) rotate(5deg)";
            images_about_me.style.opacity = "0";
        }
    } catch (error) {
        
    }
    

    let compteur_techno = 0;
    techno.forEach(element => {
        try {
            if (compteur_techno  > 1) {
                if (window.scrollY > 1100) {
                    element.style.transform = "translate(0)";
                    element.style.opacity = "1";
                } else {
                    element.style.transform = "translate(100px)";
                    element.style.opacity = "0";
                }
            } else {
                if (window.scrollY > 1100) {
                    element.style.transform = "translate(0)";
                    element.style.opacity = "1";
                } else {
                    element.style.transform = "translate(-100px)";
                    element.style.opacity = "0";
                }
            }
        } catch (error) {
            
        }
        
        compteur_techno =(compteur_techno + 1)%4;
    });
   
    try {
        if (window.scrollY > 1650) {
            images_cv.style.transform = "translate(0) rotate(-5deg)";
            images_cv.style.opacity = "1";
            form_cv.style.transform = "translate(0)";
            form_cv.style.opacity = "1";
        } else {
            images_cv.style.transform = "translate(-100px) rotate(-5deg)";
            images_cv.style.opacity = "0";
            form_cv.style.transform = "translate(100px)";
            form_cv.style.opacity = "0";
        }
    } catch (error) {
        
    }
    
});