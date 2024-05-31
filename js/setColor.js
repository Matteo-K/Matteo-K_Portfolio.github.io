/* ### Changement de couleur ### */

let colorStorage = parseInt(localStorage.getItem("color"));

if (colorStorage === null || isNaN(colorStorage)) {
    colorStorage = 1;
}

function changColor(color) {
    let sphereColorActual = document.querySelector('.select-color li:nth-child('+color+') span > span');
    let sphereColorOlder = document.querySelector('.select-color li:nth-child('+colorStorage+') span > span');
    
    sphereColorActual.classList.toggle("selected");
    sphereColorOlder.classList.toggle("selected");   
    document.querySelector('.select-color li:nth-child('+color+') div > span + span').classList.toggle("selected_span");
    document.querySelector('.select-color li:nth-child('+colorStorage+') div > span + span').classList.toggle("selected_span");
    colorStorage = color;
    
    localStorage.setItem("color",color);
    
    var root = document.querySelector(':root'); 
    switch (color) {
        case 1:
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
            root.style.setProperty("--clr-search-bg2--","#eee");
            root.style.setProperty("--clr-search-selcted--","#DDD");
            root.style.setProperty("--clr-search-border--","#04B3FD");
            root.style.setProperty("--clr-search-icon--","#4CA522");
            root.style.setProperty("--clr-search-iconhvr--","#0F410E");
            root.style.setProperty("--clr-light-font--","#fff");
            root.style.setProperty("--clr-dark-font--","#000");
            root.style.setProperty("--clr-link-font--","#5cbfca");
            root.style.setProperty("--clr-link-hover--","teal");
            root.style.setProperty("--clr-footer-bg--","#6C4343");
            break;

        case 2:
            root.style.setProperty("--clr-header-bg--","#3E563D");
            root.style.setProperty("--clr-logo-drpShdw--","#000");
            root.style.setProperty("--clr-aside-bg--","#314E30");
            root.style.setProperty("--clr-aside-border--","#4E923A");
            root.style.setProperty("--clr-aside-selcted--","#13558C");
            root.style.setProperty("--clr-nav-bg--","#5F635D");
            root.style.setProperty("--clr-nav-hvr--","purple");
            root.style.setProperty("--clr-art1-bg--","#9BB1BD");
            root.style.setProperty("--clr-art2-bg--","#75B6D9");
            root.style.setProperty("--clr-section-bg--","#fff");
            root.style.setProperty("--clr-search-bg1--","#fff");
            root.style.setProperty("--clr-search-bg2--","#eee   ");
            root.style.setProperty("--clr-search-selcted--","#75b092");
            root.style.setProperty("--clr-search-border--","purple");
            root.style.setProperty("--clr-search-icon--","purple");
            root.style.setProperty("--clr-search-iconhvr--","purple");
            root.style.setProperty("--clr-light-font--","#fff");
            root.style.setProperty("--clr-dark-font--","#000");
            root.style.setProperty("--clr-link-font--","#39C8DC");
            root.style.setProperty("--clr-footer-bg--","#3E565D");
            break;

        case 3:
            root.style.setProperty("--clr-header-bg--","purple");
            root.style.setProperty("--clr-logo-drpShdw--","purple");
            root.style.setProperty("--clr-aside-bg--","purple");
            root.style.setProperty("--clr-aside-border--","purple");
            root.style.setProperty("--clr-aside-selcted--","purple");
            root.style.setProperty("--clr-nav-bg--","purple");
            root.style.setProperty("--clr-nav-hvr--","purple");
            root.style.setProperty("--clr-art1-bg--","purple");
            root.style.setProperty("--clr-art2-bg--","purple");
            root.style.setProperty("--clr-section-bg--","purple");
            root.style.setProperty("--clr-search-bg1--","purple");
            root.style.setProperty("--clr-search-bg2--","purple");
            root.style.setProperty("--clr-search-selcted--","purple");
            root.style.setProperty("--clr-search-border--","purple");
            root.style.setProperty("--clr-search-icon--","purple");
            root.style.setProperty("--clr-search-iconhvr--","purple");
            root.style.setProperty("--clr-light-font--","purple");
            root.style.setProperty("--clr-dark-font--","purple");
            root.style.setProperty("--clr-link-font--","purple");
            root.style.setProperty("--clr-footer-bg--","purple");
            break;

        case 4:
            root.style.setProperty("--clr-header-bg--","purple");
            root.style.setProperty("--clr-logo-drpShdw--","purple");
            root.style.setProperty("--clr-aside-bg--","purple");
            root.style.setProperty("--clr-aside-border-top--","purple");
            root.style.setProperty("--clr-aside-border-bottom--","purple");
            root.style.setProperty("--clr-aside-selcted--","purple");
            root.style.setProperty("--clr-nav-bg--","purple");
            root.style.setProperty("--clr-nav-hvr--","purple");
            root.style.setProperty("--clr-art1-bg--","purple");
            root.style.setProperty("--clr-art2-bg--","purple");
            root.style.setProperty("--clr-section-bg--","purple");
            root.style.setProperty("--clr-search-bg1--","purple");
            root.style.setProperty("--clr-search-bg2--","purple");
            root.style.setProperty("--clr-search-selcted--","purple");
            root.style.setProperty("--clr-search-border--","purple");
            root.style.setProperty("--clr-search-icon--","purple");
            root.style.setProperty("--clr-search-iconhvr--","purple");
            root.style.setProperty("--clr-light-font--","purple");
            root.style.setProperty("--clr-dark-font--","purple");
            root.style.setProperty("--clr-link-font--","purple");
            root.style.setProperty("--clr-footer-bg--","purple");
            break;
        
        default :
            alert("couleur inconnue");
            break;
    }
}

changColor(colorStorage);