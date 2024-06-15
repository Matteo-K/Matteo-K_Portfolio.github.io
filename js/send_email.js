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
    if (input_nom.value.trim() === '') {
        document.querySelector(".nom").classList.remove("valid");
        document.querySelector(".nom").classList.add("invalid");
    } else {
        document.querySelector(".nom").classList.remove("invalid");
        document.querySelector(".nom").classList.add("valid");
    }

    if (!/@[^.]+/.test(input_email.value) || !/\.[a-zA-Z]{1,3}$/.test(input_email.value)) {
        document.querySelector(".email").classList.remove("valid");
        document.querySelector(".email").classList.add("invalid");
    } else {
        document.querySelector(".email").classList.remove("invalid");
        document.querySelector(".email").classList.add("valid");
    }

    if (input_object.value.trim() === '') {
        document.querySelector(".object").classList.remove("valid");
        document.querySelector(".object").classList.add("invalid");
    } else {
        document.querySelector(".object").classList.remove("invalid");
        document.querySelector(".object").classList.add("valid");
    }

    if (input_nom.value.trim() === '' || (!/@[^.]+/.test(input_email.value) || !/\.[a-zA-Z]{1,3}$/.test(input_email.value)) || input_object.value.trim() === '' || text_area.value.trim() === "") {
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

input_contact.forEach(element => {
    element.addEventListener("focus", () => {
        element.classList.add("input_select");
    });

    element.addEventListener("blur", () => {
        element.classList.remove("input_select");
    });
});

checkDiseable()