<?php include 'includes/header.php';

// in_array: busca si un  elemento exite en un arreglo...
$carrito = array("table", "computadora", "televison");
var_dump(in_array("table",$carrito));

//ordenar los elementos de un arreglo...
$numeros = array(1,3,4,5,1,2);
echo "<pre>";
sort($numeros);// ordena de menor a mayor...
var_dump($numeros);
echo "</pre>";
echo "<br>";

$numeros = array(1,3,4,5,1,2);
echo "<pre>";
rsort($numeros);// ordena de mayor a menor...
var_dump($numeros);
echo "</pre>";

//ordenar arreglo asociativo...
$cliente = array(
    "saldo"=> 200,
    "tipo" => "premium",
    "nombre"=> "adan"
);


asort($cliente); // ordena por valores orden alfabetico...
echo "<pre>";
var_dump($cliente);
echo "</pre>";
echo "<br>";

ksort($cliente); //ordenas las llaves orden alfabetico...
echo "<pre>";
var_dump($cliente);
echo "</pre>";
echo "<br>";


krsort($clientes);//ordena por orden alfabetico pero inversa de la z ala a...
echo "<pre>";
var_dump($cliente);
echo "</pre>";
echo "<br>";


arsort($cliente);// muestra primero las letras y despues los numeros...
echo "<pre>";
var_dump($cliente);
echo "</pre>";








include 'includes/footer.php';