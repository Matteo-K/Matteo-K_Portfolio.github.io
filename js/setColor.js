/* ### Changement de couleur ### */

const theme = document.querySelector(".btnTheme");
let colorStorage = parseInt(localStorage.getItem("color"));

if (colorStorage === null || isNaN(colorStorage)) {
    colorStorage = 0;
}

function changColor() {
    localStorage.setItem("color",colorStorage);
    const root = document.querySelector(':root'); 
    switch (colorStorage) {
        case 0:
            root.style.setProperty("--clr-header-bg--","#364968");
            root.style.setProperty("--clr-logo-drpShdw--","#000");
            root.style.setProperty("--clr-aside-bg--","#555");
            root.style.setProperty("--clr-aside-border--","#ddd");
            root.style.setProperty("--clr-aside-selcted--","#ff0000");
            root.style.setProperty("--clr-nav-bg--","#E09664");
            root.style.setProperty("--clr-nav-hvr--","#555");
            root.style.setProperty("--clr-art1-bg--","#FDDF97");
            root.style.setProperty("--clr-art2-bg--","#44BEDE");
            root.style.setProperty("--clr-section-bg--","#fff");
            root.style.setProperty("--clr-search-bg1--","#fff");
            root.style.setProperty("--clr-search-bg2--","#ddd");
            root.style.setProperty("--clr-search-selcted--","#ccc");
            root.style.setProperty("--clr-search-border--","#04B3FD");
            root.style.setProperty("--clr-search-icon--","#4CA522");
            root.style.setProperty("--clr-search-iconhvr--","#0F410E");
            root.style.setProperty("--clr-light-font--","#fff");
            root.style.setProperty("--clr-light-dark-font--","#666");
            root.style.setProperty("--clr-dark-font--","#000");
            root.style.setProperty("--clr-link-font--","#ff00ff");
            root.style.setProperty("--clr-link-font-ft--","#00ff00");
            root.style.setProperty("--clr-link-hover--","teal");
            root.style.setProperty("--clr-footer-bg--","#6C4343");
            break;

        case 1:
            root.style.setProperty("--clr-header-bg--","#52553a");
            root.style.setProperty("--clr-logo-drpShdw--","#000");
            root.style.setProperty("--clr-aside-bg--","#626b50");
            root.style.setProperty("--clr-aside-border--","#4E923A");
            root.style.setProperty("--clr-aside-selcted--","#13558C");
            root.style.setProperty("--clr-nav-bg--","#5F635D");
            root.style.setProperty("--clr-nav-hvr--","purple");
            root.style.setProperty("--clr-art1-bg--","#ebd7b2");
            root.style.setProperty("--clr-art2-bg--","#91a65b");
            root.style.setProperty("--clr-section-bg--","#fff");
            root.style.setProperty("--clr-search-bg1--","#ebd7b2");
            root.style.setProperty("--clr-search-bg2--","#fff");
            root.style.setProperty("--clr-search-selcted--","#dae8aa");
            root.style.setProperty("--clr-search-border--","#aadd22");
            root.style.setProperty("--clr-search-icon--","#9d7448");
            root.style.setProperty("--clr-search-iconhvr--","#854f33");
            root.style.setProperty("--clr-light-font--","#fff");
            root.style.setProperty("--clr-light-dark-font--","#666");
            root.style.setProperty("--clr-dark-font--","#000");
            root.style.setProperty("--clr-link-font--","#ff0000");
            root.style.setProperty("--clr-link-font-ft--","#00ff00");
            root.style.setProperty("--clr-link-hover--","teal");
            root.style.setProperty("--clr-footer-bg--","#854f33");
            break;
        default :
            alert("couleur inconnue");
            break;
    }
    colorStorage = (colorStorage + 1)%2;
}

changColor();