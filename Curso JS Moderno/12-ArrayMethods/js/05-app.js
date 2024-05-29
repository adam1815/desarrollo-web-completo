//arrays metodos find
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// con forEach
let resultado = '';
carrito.forEach((producto,index) => {
if(producto.nombre === 200){
    resultado = carrito[index];
    }


});
console.log(resultado);




// find encuentra el primer objecto con precio mayor a 180
let resultado2 = 0;
resultado2 = carrito.find(producto => producto.precio ===200);
console.log(resultado2);