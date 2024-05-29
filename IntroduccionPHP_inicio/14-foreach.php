<?php include 'includes/header.php';

$clientes = array ("pedro","juan","karen");

foreach ($clientes as $cliente )
echo $cliente ."<br>";
echo count($clientes);
for ($i = 0; $i < count($clientes); $i++){
    echo $clientes[$i] . "<br>";
}

// foreach con arreglos asociativos
$cliente = [
    "nombre" => "juan",
    "saldo"  =>   200,
    "tipo" => "premium"
];

foreach ($cliente as $key => $valor )
echo $key ."-"  .$valor ."<br>";
echo count($clientes);


$producto = [
    [
        "nombre" => "table",
        "precio" => 200,
       "disponible" => true

    ],

    [
        "nombre" => "television 24 inch ",
        "precio" => 300,
       "disponible" => true

    ],

    [
        "nombre" => "monitor curvo",
        "precio" => 400,
       "disponible" => false

    ]

    ];

    foreach( $productos as $producto) { ?>
        <li>
            <p>Producto: <?php echo $producto['nombre']; ?> </p>
            <p>Precio: <?php echo "$" . $producto['precio']; ?> </p>
            <p><?php echo ($producto['disponible']) ? 'Disponible' : 'No Disponible';  ?> </p>
        </li>
        <?php
}
    


    
 
    
    foreach($producto as $productos) {

        echo "<pre>";
            var_dump($producto);

        echo "</pre>";
    }


include 'includes/footer.php';