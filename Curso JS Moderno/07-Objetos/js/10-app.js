//COPIAR 2 OBJECTOS


//modo stricto
//"use strict";// no permite malas practicas, y activa el metodo object freeze

const producto = {
    nombre: 'monitor 20"',
    precio: 300,
    disponible: false,
    };

    const medidas = {
        peso: "1 kg",
        medida: "1 metro"
    };
    //Object.seal(producto);//metodo que permite sellar el objeto, permite modificar las llaves existentes
    
    const resultado = Object.assign(producto, medidas);
    console.log(resultado);

    // Spread Operator o Rest Operator
    const resultado2 = {... producto, ...   medidas};//los 3 puntos significan que toma la copia de producto y la asignan al objeto
    console.log(resultado2); 