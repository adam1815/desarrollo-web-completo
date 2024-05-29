declare(strict_types = 1);
<?php include 'includes/header.php';

function sumar(int $numero1 = 0 , int $numero2 = 0){
    echo  $numero1 + $numero2;
   }

sumar(10,495);
echo "<br>";
sumar(30,70);
echo "<br>";
sumar(100,20);
echo "<br>";
sumar(106,20);
echo "<br>";
sumar(102,200);
echo "<br>";
sumar(1000,2320);
echo "<br>";
sumar(1,203);
sumar(105,120);



include 'includes/footer.php';