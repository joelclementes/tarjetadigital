import enviardatosdeformulario from "./enviardatosdeformulario.js";
import personalizaMsgWhatsapp from "./personalizaMsgWhatsapp.js";
import contactFormValidations from "./validaciones_formulario.js";

const d = document;
const url = "http://localhost/tarjetadigital/backend/proceso.php";

d.addEventListener("DOMContentLoaded", (e) => {
    personalizaMsgWhatsapp();
    contactFormValidations();
    enviardatosdeformulario(url);
})