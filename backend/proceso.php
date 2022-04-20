<?php 
// Especificamos estas cabeceras
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once("agente.php");

$oAgente = new Seguros();
@$proceso = $_POST["proceso"];

switch ($proceso){
    case "CONTACTO_INSERT":
        print $oAgente->contacto_insert(
            $_POST["Nombre"],
            $_POST["Asunto"],
            $_POST["Correo"],
            $_POST["Whatsapp"],
            $_POST["Mensaje"]
        );
        break;
}
?>