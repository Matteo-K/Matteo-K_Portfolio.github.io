(function(){
    emailjs.init({
        publicKey: "LilQSPPcQyVPKT49-",
    });
})();

function sendMail () {
    let params = {
        name : document.getElementById("nom").value + " " + document.getElementById("prenom").value,
        subject : document.getElementById("object").value,
        message : document.getElementById("contenue").value + "\nTéléphone : " + document.getElementById("telephone").value
    }

    let retour =  {
        email : document.getElementById("email").value
    }

    emailjs.send("service_rm1nq1b","template_9bbynqn",params).then(alert("Email send !!!"));
}

function checkDiseable() {
    if (input_nom.value.trim() === '' || input_email.value.trim() === '' || input_object.value.trim() === '' || text_area.value.trim()) {
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


form.addEventListener('submit', (e) => {
    if (input_submit.disabled) {
        e.preventDefault();
    }
});