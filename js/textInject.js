const texts = {
    fr: [
        "Trouvez des objets 3D, des maquettes et des illustrations ici.",
        "Créer un compte",
        "Inscrivez-vous avec Google",
        "Inscrivez-vous avec Facebook",
        "- OU -",
        "Vous avez déjà un compte ? <span>Connectez vous</span>"
    ],
    fr_form:[
        "Nom et prénom",
        "Adresse e-mail",
        "Mot de passe",
        "Créer un compte",
    ],
    gb: [
        "Find 3D Objects, Mockups and Illustration here.",
        "Create Account",
        "Sign up with Google",
        "Sign up with Facebook",
        "- OR -",
        "Already have an account? <span>Log in</span>"
    ],
    gb_form:[
        "Full Name",
        "Email Address",
        "Password",
        "Create Account",
    ],
    de: [
        "Hier finden Sie 3D-Objekte, Modelle und Illustrationen.",
        "Benutzerkonto erstellen",
        "Anmelden mit Google",
        "Anmelden mit Facebook",
        "- ODER -",
        "Sie haben bereits ein Konto? <span>Anmeldung</span>"
    ],
    de_form:[
        "Vollständiger Name",
        "E-Mail-Adresse",
        "Passwort",
        "Benutzerkonto erstellen",
    ],
    sp: [
        "Encuentre objetos 3D, maquetas e ilustraciones aquí.",
        "Crear una cuenta",
        "Registrarte con Google",
        "Registrarte con Facebook",
        "- O -",
        "¿Ya tienes una cuenta? <span>Acceso</span>"
    ],
    sp_form:[
        "Nombre completo",
        "Dirección de correo electrónico",
        "Contraseña",
        "Crear una cuenta",
    ],
}

const changeTexts = (selected) => {
    const translate = document.querySelectorAll('.translate');
    translate.forEach( (t, idx) => {
        t.innerHTML = texts[selected][idx];
    });
    const form_placeholders = document.querySelectorAll('#form input');
    form_placeholders.forEach((inp, idx) => {
        if (inp.placeholder) {
            inp.placeholder=texts[selected+'_form'][idx];
        }            
        else {
            inp.value=texts[selected+'_form'][idx];
        }
    });
}

window.onload = ()=> {
    const langage = document.querySelector('#lang-select');
    let selected = langage.value;
    langage.addEventListener('change', () => {
        selected = langage.value;
        changeTexts(selected);
    });
};
