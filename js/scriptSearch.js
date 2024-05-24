/**
 * @file
 * @author Mattéo_KERVADEC
 * @constant suggestions liste de série possible pour la barre de recherche
 */

const suggestions = [
    { projet_: "Monopoly", lien: "the-last-of-us.html" },
    { projet_: "Sudoku", lien: "Paolo.html" },
    { projet_: "Innosang", lien: "https://youtu.be/8ASkQJEALjc?si=UAP4TcmAYIDHrsG8" },
    { projet_: "Dieu des Frites", lien: "DieuDesFrites.html" },
    { projet_: "Walking Dead", lien: "WalkingDead.html" },
    { projet_: "Man vs Bee", lien: "ManVsBee.html" },
    { projet_: "Atlantis", lien: "Atlantis.html" },
    { projet_: "911", lien: "911.html" },
    { projet_: "Dead or Love", lien: "DeadOrLove.html" },
    { projet_: "Genshin Impact", lien: "GenshinImpact.html" },
    { projet_: "Halo", lien: "Halo.html" },
    { projet_: "Under the Dome", lien: "UnderTheDome.html" },
    { projet_: "Hollow Knight", lien: "HollowNight.html" },
    { projet_: "South Park", lien: "SouthPark.html" },
    { projet_: "Musk", lien: "musk.html" },
    { projet_: "Detroit Become Human", lien: "detroit-become-human.html" },
    { projet_: "Minecraft", lien: "minecraft.html" },
    { projet_: "The Facility", lien: "the-facility.html" },
    { projet_: "Free Beer", lien: "free-beer.html" },
    { projet_: "Connect", lien: "connect.html" },
    { projet_: "Down Under", lien: "down-under.html" },
    { projet_: "They're RED", lien: "theyre-red.html" },
    { projet_: "Rick", lien: "https://youtu.be/dQw4w9WgXcQ?si=gPv6Yjx-lYoYusla"},
];

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
    userData = e.target.value; //Valeur de l'entrée de l'utilisateur
    let listeVide = [];
    if (userData) {
        listeVide = suggestions.filter((data) => {
            //filtre tout les suggestions contenant l'entrée de l'utilisateur
            return data.projet_
                .toLocaleLowerCase()
                .includes(userData.toLocaleLowerCase());
        });
        listeVide = listeVide.map((data) => {
            // Insert la suggestion
            return (data = `<li>${data.projet_}</li>`);
        });
        searchWrapper.classList.add("active"); //afficher la boîte d'auto-completation
        afficheSuggestions(listeVide);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //Ajoute sur un clic un attribue dans tout les <li>
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //afficher la boîte d'auto-completation
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
    icon.onclick = () => {
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