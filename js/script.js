/* Api Github */

fetch("https://api.github.com/users/Matteo-K/repos")
.then((result) => {
    if (result.ok) {
        result.json().then((data) => console.log(data))

    } else {
        console.log("not success")
    }
});

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

/* Gérer les couleurs des infographie */

let color_inf, match;

const point_infographie = document.querySelectorAll(".point");
const detail_infographie = document.querySelectorAll(".hist, .hist h4, .hist h5");
let infographie_size = point_infographie.length;
let detail_proportion = detail_infographie.length/infographie_size;

for (let index = 0; index < infographie_size; index++) {
    const currentPoint = point_infographie[index];
    if (currentPoint instanceof Element) {
        color_inf = window.getComputedStyle(currentPoint).getPropertyValue("border-color");
        match = /rgb\((.*)\)/.exec(color_inf);
        detail_infographie[index * detail_proportion].style.border = "3px solid " + color_inf;
        detail_infographie[(index * detail_proportion) + 1].style.color = color_inf;
        detail_infographie[(index * detail_proportion) + 2].style.color = "rgb(" + match[1] + ", 0.6)";
    }
}


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
    console.log(aside_nav);
}

/* Sélection du format CV */

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
                console.log(lien);
            break;
            case "PNG":
                lien.setAttribute("href","images/cv/CV_kervadecMatteo.png");
                lien.setAttribute("download","CV_kervadecMatteo.png");
                console.log(lien);
            break;
            case "JPG":
                lien.setAttribute("href","images/cv/CV_kervadecMatteo.jpg");
                lien.setAttribute("download","CV_kervadecMatteo.jpg");
                console.log(lien);
            break;

            default:
                alert("format inconnu");
                break;
        }
        lien.click();
    }
    e.preventDefault();
},false);

/* ### Changement de couleur ### */

let colorSelect = 1;

function changColor(color) {
    if (colorSelect != color) {
        let sphereColorActual = document.querySelector('.select-color li:nth-child('+color+') span div');
        const sphereColorOlder = document.querySelector('.select-color li:nth-child('+colorSelect+') span div');
        if (sphereColorActual == null || sphereColorOlder == null) {
            alert('couleur inconnu !')
        } else {
            sphereColorActual.classList.toggle("selected");
            sphereColorOlder.classList.toggle("selected");   
            document.querySelector('.select-color li:nth-child('+color+') span + span').classList.toggle("selected_span");
            document.querySelector('.select-color li:nth-child('+colorSelect+') span + span').classList.toggle("selected_span");
            colorSelect = color;

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
                    root.style.setProperty("--clr-link-hover--","#5cbfca");
                    root.style.setProperty("--clr-footer-bg--","#6C4343");
                    break;

                case 2:
                    console.log(document.querySelector("aside"))
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
                    break;
            }
        }
    }
}