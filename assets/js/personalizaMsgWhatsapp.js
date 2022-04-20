const d = document;

export default function personalizaMsgWhatsapp(){
    // Defino variables
    var intereses = ``;
    const 
    chkGastosMedicos = d.getElementById("meInteresaGastosMedicos"),
    chkSeguroDeVida = d.getElementById("meInteresaSeguroDeVida"),
    chkPlanDeRetiro = d.getElementById("meInteresaPlanDeRetiro"),
    chkSeguroDeAuto = d.getElementById("meInteresaSeguroDeAuto");
    creaCadenaInteres(chkGastosMedicos,chkSeguroDeVida,chkPlanDeRetiro,chkSeguroDeAuto);



    // Eventos de los chkBoxes
    chkGastosMedicos.addEventListener("change",()=>{
        intereses=``;
        intereses = creaCadenaInteres(chkGastosMedicos,chkSeguroDeVida,chkPlanDeRetiro,chkSeguroDeAuto);
    })
    chkSeguroDeVida.addEventListener("change",()=>{
        intereses=``;
        intereses = creaCadenaInteres(chkGastosMedicos,chkSeguroDeVida,chkPlanDeRetiro,chkSeguroDeAuto);
    })
    chkPlanDeRetiro.addEventListener("change",()=>{
        intereses=``;
        intereses = creaCadenaInteres(chkGastosMedicos,chkSeguroDeVida,chkPlanDeRetiro,chkSeguroDeAuto);
    })
    chkSeguroDeAuto.addEventListener("change",()=>{
        intereses=``;
        intereses = creaCadenaInteres(chkGastosMedicos,chkSeguroDeVida,chkPlanDeRetiro,chkSeguroDeAuto);
    })

}

function creaCadenaInteres(chkGastosMedicos,chkSeguroDeVida,chkPlanDeRetiro,chkSeguroDeAuto){
    // Función que crea la cadena de texto para el botón de WhatsApp
    let cadena = " ";
    
    cadena += chkGastosMedicos.checked==true ? "• Gastos médicos " : "";
    cadena += chkSeguroDeVida.checked==true ? "• Seguro de vida " : "";
    cadena += chkPlanDeRetiro.checked==true ? "• Plan de retiro " : "";
    cadena += chkSeguroDeAuto.checked==true ? "• Seguro de auto " : "";

    const intereses = cadena.trim()=='' ? '' : `Me interesa: ${cadena.trim()}.`;
    
    let textoParaLink = `Hola Gloria, vi tu tarjeta. ${intereses} Deseo recibir más información. Gracias.`;

    const cadenaHttp = `https://api.whatsapp.com/send/?phone=522288562534&text=${textoParaLink}&app_absent=0`;
    let $btnWhatsApp1 = document.getElementById('txtMsgWhatsApp1');
    let $btnWhatsApp2 = document.getElementById('txtMsgWhatsApp2');
    $btnWhatsApp1.setAttribute('href',cadenaHttp);
    $btnWhatsApp2.setAttribute('href',cadenaHttp);
    return cadenaHttp;
}