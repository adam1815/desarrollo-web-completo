//spread operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//meses.push('agosto');// este metodo modifica el arreglo original

const resultado = [...meses, 'agosto', ...carrito, ];
console.log(resultado);// concatena dos arreglos uno de objecto y otro de indeces

const meses2 = [...meses,'Agosto'];
//console.log(meses2);

//spread operator

const producto = {nombre: 'disco duro', precio: 300};
const carrito2 = [...carrito, producto];
console.log(carrito2);