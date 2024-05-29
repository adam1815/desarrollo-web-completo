//modo stricto
"use strict";// no permite malas practicas, y activa el metodo object freeze

const producto = {
    nombre: 'monitor 20"',
    precio: 300,
    disponible: true,
    };
    Object.freeze(producto);//metodo que permite congelar la modificacion del objeto
    
    //producto.disponible = false;
    //console.log(producto);

    //delete producto.precio;

    console.log(Object.isFrozen(producto));// metodo para saber si el objecto esta congelado