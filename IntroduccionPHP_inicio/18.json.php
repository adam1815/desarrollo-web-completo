<?php include 'includes/header.php';



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
    echo "<pre>";
        var_dump($producto);
        echo "<br>";
        $json = json_encode($producto,JSON_UNESCAPED_UNICODE);//convierte el arreglo a json
        $json =json_decode($json);//convierte un string a un arreglo
        var_dump($json);
        var_dump($json_array);
        echo "<br>";

    echo "</pre>";




include 'includes/footer.php';