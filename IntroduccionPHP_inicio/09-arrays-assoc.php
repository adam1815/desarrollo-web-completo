    <?php include 'includes/header.php';


// arreglos asociativos...
    $cliente = array(
    "nombre"=>"adan", 
    "saldo" => "200",
     "informacion"=> [
        "tipo"=> "premium"
     ]);
    echo "<pre>";
    var_dump($cliente);
    var_dump($cliente["nombre"]);// accede al nombre del cliente...
    echo "</pre>";
    echo "<br>";
        
// otra forma es de acceder...
$cliente["codigo"] = 123456789;
    $cliente["nombre"] = "adan";
    $cliente["saldo"] = "200";
    $cliente["informacion"] ["tipo"];
    echo "<pre>";
    var_dump($cliente);
    echo "</pre>";

    

    
    




include 'includes/footer.php';