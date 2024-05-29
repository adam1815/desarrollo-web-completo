//problema con los objectos


const producto = {
    nombre: 'monitor 20"',
    precio: 300,
    disponible: true,
    };
    
     console.log(producto);
    
    
    //como acceder alos valores de un objecto
     console.log(producto.nombre);
    
    //segunda forma de acceder a los objectos
    console.log(producto ["nombre"]);

    producto.disponible = false;
    console.log(producto);
    delete producto.precio;
    console.log(producto);
