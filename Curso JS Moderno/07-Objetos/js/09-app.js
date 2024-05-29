//modo stricto
"use strict";// no permite malas practicas, y activa el metodo object freeze

const producto = {
    nombre: 'monitor 20"',
    precio: 300,
    disponible: false,
    };
    Object.seal(producto);//metodo que permite sellar el objeto, permite modificar las llaves existentes
    
    producto.disponible = true;
    console.log(producto);

    //delete producto.precio;

    console.log(Object.isFrozen(producto));// metodo para saber si el objecto esta congelado
    console.log(Object.isSealed(producto)); //metodo que permite comprobar si el objecto esta sellado...