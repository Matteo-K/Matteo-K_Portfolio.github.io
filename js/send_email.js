(function(){
    emailjs.init({
        publicKey: "LilQSPPcQyVPKT49-",
    });
})();

function sendMail () {

    let params = {
        subject : document.getElementById("object").value,
        email : document.getElementById("email").value
    }

    let retour =  {
        email : document.getElementById("email").value
    }

    const prnm = document.getElementById("prenom").value;
    const tel = document.getElementById("telephone").value;

    if (prnm.trim() === "") {
        params.name = document.getElementById("nom").value;
        retour.name = document.getElementById("nom").value;
    } else {
        params.name = document.getElementById("nom").value + " " + prnm;
        retour.name = document.getElementById("nom").value + " " + prnm;
    }

    if (tel.trim() === "") {
        params.message = document.getElementById("contenue").value
    } else {
        params.message = document.getElementById("contenue").value + "\nTéléphone : " + tel;
    }
    emailjs.send("service_rm1nq1b","template_9bbynqn",params);
    e.preventDefault();
}

function checkDiseable() {
    if (input_nom.value.trim() === '' || input_email.value.trim() === '' || !/@/.test(input_email.value) || input_object.value.trim() === '' || text_area.value.trim() === "") {
        input_submit.disabled = true;
    } else {
        input_submit.disabled = false;
    }
}

const input_submit = document.getElementById("ft_envoyer");
const input_nom = document.getElementById("nom");
const input_email = document.getElementById("email");
const input_object = document.getElementById("object");
const form = document.getElementById("form_contact");
const text_area = document.getElementById("contenue");

input_nom.addEventListener('input', checkDiseable);
input_email.addEventListener('input', checkDiseable);
input_object.addEventListener('input', checkDiseable);
text_area.addEventListener('input', checkDiseable);

input_submit.addEventListener("click", () => {
    document.querySelector(".pop_up").classList.add("pop_up_ouvert");
})

input_submit.disabled = true;

function fermerPopUp() {
    document.querySelector(".pop_up").classList.remove("pop_up_ouvert");
}
input_submit.style.backgroundColor

const input_contact = document.querySelectorAll("#contact input, #contenue");
const root = document.documentElement; // Utilisation de document.documentElement pour sélectionner :root directement
const style = window.getComputedStyle(root);

input_contact.forEach(element => {
    element.addEventListener("focus", () => {
        element.classList.add("input_select");
    });

    element.addEventListener("blur", () => {
        element.classList.remove("input_select");
    });
});
