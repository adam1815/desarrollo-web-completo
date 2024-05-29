//metodo de arrays reduce
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
//con un forEach, suma el valor total de los producto del carrito
let total = 0;
carrito.forEach(producto => total+= producto.precio)
console.log(total);

//metodo reduce
let resultado = 0;
resultado = carrito.reduce((total , producto) => total +  producto.precio , 0)
console.log(resultado);





