<?php include 'includes/header.php';

//util para ver los contenidos de array..
$carrito = ["table", "television" , "computadora"];
echo "<pre>";
var_dump($carrito);// muestra el valor del arreglo
echo "</pre>";// muestra los contenido mas ordenado...

$carrito[3] = "nuevo producto"; //añade un nuevo elemento al indice 3 del arreglo...
echo "<pre>";
var_dump($carrito);// muestra el valor del arreglo
echo "</pre>";// muestra los contenido mas ordenado...

//añadir elemento nuevo al final...
array_push($carrito, "audifanos");
echo "<pre>";
var_dump($carrito);
echo "</pre>";
echo "<br>";

//añadir un elemento al inicio...
array_unshift($carrito, "microfono");
echo "<pre>";
var_dump($carrito);
echo "</pre>";
echo "<br>";

// otra forma de crear arreglo...
$carrito = array();
echo "<pre>";
var_dump($carrito);
echo "</pre>";
echo "<br>";

$cliente = array("adan camacho","jorge perez","jovanny castro");
echo "<pre>";
var_dump($cliente);
echo "</pre>";
echo "<br>";


include 'includes/footer.php';