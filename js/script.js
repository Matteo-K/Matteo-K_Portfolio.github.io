/* Souris qui bouge */

const linkStatic = document.getElementById("link_static");

document.addEventListener("mousemove", function (e) {
  // Déplacer l'objet avec la souris
  linkStatic.style.left = e.pageX + "px";
  linkStatic.style.top = e.pageY + "px";

  // Faire tourner l'image lorsque la souris se déplace de gauche à droite
  if (e.movementX > 0) {
    linkStatic.classList.add("rotation");
  } else {
    linkStatic.classList.remove("rotation");
  }
});

/* ### Menu navigation ### */
/* -- ouvre et ferme le menu à l'intéraction du bouton du menu -- */

let open_menu = 0;

document.querySelector("header div + img").addEventListener("click", () => {
  // si la souris sort du cadre puis appuie sur le bouton, ils feront la même action donc on met une condition
  if (open_menu == 0) {
    aside_nav.style.transform = "translate(0)";
  } else {
    aside_nav.style.transform = "translate(100%)";
  }
  open_menu = (open_menu + 1) % 2;
});

/* -- ferme le aside quand la souris sors du aside */
const aside_nav = document.querySelector("aside");

aside_nav.addEventListener("mouseleave", () => {
  aside_nav.style.transform = "translate(100%)";
  open_menu = (open_menu + 1) % 2;
});

/* afficher le bloc parcours */

try {
  const lien_parcours = document.querySelector("#presentation div + a");
  const parcours = document.querySelector("#parcours");

  let parcours_compteur = 0;

  lien_parcours.addEventListener("click", () => {
    if (parcours_compteur % 2 == 0) {
      parcours.style.display = "flex";
      parcours.style.opacity = "1";
    } else {
      parcours.style.display = "none";
      parcours.style.opacity = "0";
    }
    parcours_compteur++;
  });
} catch (error) {}

/* Sélection du format CV */
try {
  const downloadCV = document.querySelector("form");
  downloadCV.addEventListener(
    "submit",
    (e) => {
      const data = new FormData(downloadCV);
      // Prend le format entrer dans le form
      for (const entry of data) {
        let lien = document.querySelector("form a");
        // sélectionne le format à télécharger
        set_cv(entry[1]);
        lien.click();
      }
      e.preventDefault();
    },
    false
  );
} catch (error) {}

function set_cv(value) {
  let lien = document.querySelector("form a");
  let img = document.querySelector("#cv a img");
  let a = document.querySelector("#cv a");
  switch (value) {
    case "Standart":
      lien.setAttribute("href", "images/cv/CV_kervadec_matteo.pdf");
      lien.setAttribute("download", "CV_kervadec_matteo.pdf");
      img.setAttribute("src", "images/cv/CV_kervadec_matteo.png");
      a.setAttribute("href", "images/cv/CV_kervadec_matteo.pdf");
      break;
    case "Noir & Blanc":
      lien.setAttribute("href", "images/cv/CV_kervadec_matteo_b&w.pdf");
      lien.setAttribute("download", "CV_kervadec_matteo_b&w.pdf");
      img.setAttribute("src", "images/cv/CV_kervadec_matteo_b&w.png");
      a.setAttribute("href", "images/cv/CV_kervadec_matteo_b&w.pdf");
      break;
    case "Impression":
      lien.setAttribute("href", "images/cv/CV_kervadec_matteo_impress.pdf");
      lien.setAttribute("download", "CV_kervadec_matteo_impress.pdf");
      img.setAttribute("src", "images/cv/CV_kervadec_matteo.png");
      a.setAttribute("href", "images/cv/CV_kervadec_matteo.pdf");
      break;

    default:
      alert("format inconnu");
      break;
  }
}

document.querySelectorAll('[type="radio"]').forEach((element) => {
  element.addEventListener("input", () => {
    set_cv(element.id);
  });
});

/* Apparition scroll */

const images_about_me = document.querySelector("#aboutMe img");
const images_cv = document.querySelector("#cv img");
const form_cv = document.querySelector("#cv form");
const techno = document.querySelectorAll("#technologies li:not(p + ul li)");

window.addEventListener("scroll", () => {
  try {
    if (window.scrollY > 450) {
      images_about_me.style.transform = "translate(0) rotate(5deg)";
      images_about_me.style.opacity = "1";
    } else {
      images_about_me.style.transform = "translate(100px) rotate(5deg)";
      images_about_me.style.opacity = "0";
    }
  } catch (error) {}

  let compteur_techno = 0;
  techno.forEach((element) => {
    try {
      if (compteur_techno > 1) {
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
    } catch (error) {}

    compteur_techno = (compteur_techno + 1) % 4;
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
  } catch (error) {}
});
