<?php include 'includes/header.php';

$autenticado = true;
$admin = true;
if($autenticado && $admin ){
    echo "usuario autenticado correctamente...";
}
else {
    echo "usuario no auntenticado, inicia session...";
}

// if aninados

$cliente = array(
    "nombre" => "adan",
    "saldo" => 0,
    "informacio" => [
        "tipo" => "premium"
        ]
    );
if( !empty($cliente)){
    echo " <br>";
    echo "el arreglo no esta vacio";
    

    if($cliente["saldo"] > 0){
        echo "<br>";
        echo "el cliente tiene saldo disponible";
    
    }
    else{
        echo "saldo insuficiente";
    }
}

else {
    echo "<br>";
    echo "el arreglo esta vacio";
    
}

// else if
echo "<br>";
if($cliente["saldo"] > 0) {
    echo "el cliente tiene saldo";
}
else if ($cliente["informacion"]["tipo"]== "premium")
{
    echo "el cliente es premiun";

}
else {
    echo "no hay cliente definido" ." " ."no tiene saldo" ." o no es premiun";
}

//switch
echo "<br>";
$tecnologia = "php";
switch($tecnologia) {
    case "php":
        echo "<br>";
        echo "php es un excelente lenguaje";
        break;
        case "javascrits":
            echo "Genial, el lenguaje de la web";
            break;
            case "html":
                echo "lenguaje de marcado para la web";
                break;
        default:
        echo "algun lenguaje que no se cual es";
        break;

}


   

include 'includes/footer.php'; 