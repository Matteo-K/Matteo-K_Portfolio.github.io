// Prends tout les éléments requis
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector("input + div"); // Liste des suggestions
const icon = searchWrapper.querySelector("input+ul+a"); // icon
let lienTag = searchWrapper.querySelector(".search-input > a"); // Lien vers la page
const logoSearch = searchWrapper.querySelector("i");
let page;

// Si l'utilisateur n'appuie pas sur la suggestions
let userData;

inputBox.onkeyup = (e) => {
  userData = e.target.value; // Valeur de l'entrée de l'utilisateur
  let listeVide = [];
  if (userData) {
    if (userData === "*") {
      listeVide = suggestions;
    } else {
      listeVide = suggestions.filter((data) => {
        // Filtre toutes les suggestions contenant l'entrée de l'utilisateur
        return data.projet_
          .toLocaleLowerCase()
          .includes(userData.toLocaleLowerCase());
      });
    }
    console.log(listeVide);
    listeVide = listeVide.map((data) => {
      // Insère la suggestion
      return (data = `<li>${data.projet_}</li>`);
    });
    searchWrapper.classList.add("active"); // Affiche la boîte d'auto-complétion
    afficheSuggestions(listeVide);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      // Ajoute un attribut sur un clic dans tous les <li>
      allList[i].setAttribute("onclick", "selectLink(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); // Masque la boîte d'auto-complétion si la barre de recherche est vide
  }
};

logoSearch.addEventListener("click", () => {
  linkSelect();
});

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    linkSelect();
  }
});

function linkSelect() {
  page = `#`;
  // Attribue à la page si le nom est exactement le même
  for (let id = 0; id < suggestions.length; id++) {
    if (suggestions[id].projet_.toUpperCase() === userData.toUpperCase()) {
      page = suggestions[id].lien;
      lienTag.setAttribute("href", page);
      lienTag.click();
    }
  }
}

let lienPage;

function selectLink(element) {
  let indice;
  // parcours les suggetions et attribue le lien de la page
  for (let id = 0; id < suggestions.length; id++) {
    if (suggestions[id].projet_ === element.textContent) {
      lienPage = suggestions[id].lien;
      indice = id;
    }
  }
  logoSearch.onclick = () => {
    lienTag.setAttribute("href", lienPage);
    lienTag.click();
  };
  inputBox.value = suggestions[indice].projet_;
  searchWrapper.classList.remove("active");
}

function afficheSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

/* Couleur liste de recherche */

const ulElement = document.querySelector(".search-input div");

// Création d'un observer pour écouter les mutations dans l'élément <div>
const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    let compteur_li = 0;
    const elem_li = ulElement.querySelectorAll("li");
    if (mutation.type === "childList") {
      elem_li.forEach((element) => {
        if (compteur_li % 2 === 0) {
          element.classList.add("li_color2");
        }
        compteur_li++;
      });
    }
  }
});

// Configuration de l'observer pour écouter les changements dans les enfants de l'élément <div>
const observerConfig = { childList: true };

// Démarrage de l'observation de l'élément <div>
observer.observe(ulElement, observerConfig);
