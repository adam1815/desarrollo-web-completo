<?php include 'includes/header.php';
// ciclo while sintaxi...
$i = 0;// inicializado
while($i <10){// condicion
    echo $i ."<br>";
    $i++;//incremento
}

echo "<br>";
// do while primero ejecuta el codigo y luego la condicion
$i = 0;
do {
echo $i."<br>";
    $i++;

} while($i < 10);

// for loops
for($i = 0; $i <= 10; $i++){
    echo $i."<br>";
}

/*
* 3 imprimir fiz
* 5 imprimir  buzz
* 3 y 5 fiz buzz
*/
for($i = 1; $i <= 1000  ; $i++){
    if($i % 3 === 0 && $i % 5 === 0)
    echo $i . " - FIZZ BUZZ <br>"; 
    if($i % 5 === 0){
        echo $i ."buzz <br>";
    }
    else if($i % 3 === 0) {
        echo $i . "-fiz <br>";
 
    }

    }






include 'includes/footer.php';