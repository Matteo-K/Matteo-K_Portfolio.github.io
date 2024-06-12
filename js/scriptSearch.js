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
        listeVide = suggestions.filter((data) => {
            // Filtre toutes les suggestions contenant l'entrée de l'utilisateur
            return data.projet_
                .toLocaleLowerCase()
                .includes(userData.toLocaleLowerCase());
        });
        listeVide = listeVide.map((data) => {
            // Insère la suggestion
            return (data = `<li>${data.projet_}</li>`);
        });
        searchWrapper.classList.add("active"); // Affiche la boîte d'auto-complétion
        afficheSuggestions(listeVide);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            // Ajoute un attribut sur un clic dans tous les <li>
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); // Masque la boîte d'auto-complétion si la barre de recherche est vide
    }
};


logoSearch.addEventListener("click", () => {
    linkSelect()
});

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        linkSelect();
    }
});

function linkSelect(){
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

function select(element) {
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