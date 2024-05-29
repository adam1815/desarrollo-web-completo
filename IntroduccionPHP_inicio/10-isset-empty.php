<?php include 'includes/header.php';

/* $a = 0;
if(isset($a)){ //verifca si una varable esta establecida y no declarada null
    echo "variable ´a´ esta establecida.<br>";
}
$b = null;

if(isset($b)){ // verifica que la variable esta estrabecida y declarada null
    echo "varable ´b´  esta establecida.<br>";
}
*/

$cliente = [
    "nombre"=> "juan",
    "saldo"=> "200"
];
$clientes = array();
$clientes3 = array("pedro","juan","karen");


// funcion empty, verifica si el arreglo esta vacio...
var_dump(empty($cliente));
echo "retorna true por que el arreglo esta vacio...";
echo "<br>";
 
var_dump (empty($clientes3));
echo "<br>";
echo "retorna false por que el arreglo esta lleno...";
echo "<br>";

var_dump (empty($clientes));
echo "retorna true por que el arreglo esta vacio ...";
echo "<br>";

// funcon isset: verifica si el arreglo esta creado o definido o una propiedad esta definida,
var_dump(isset($clientes4));
echo "retorna false por que el arreglo no esta declarado ni definido...";
echo "<br>";

var_dump(isset($cliente)); //en todos los casos retorna true...
                               
var_dump(isset($clientes));
var_dump(isset($clientes));
echo "<br>";
var_dump(isset($cliente["nombre"]));
echo "retorna como true por que nombre si exite en el arreglo";





include 'includes/footer.php';