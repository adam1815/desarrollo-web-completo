//arrays metodos findIndex para encontrar posicion de un arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

 const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión', precio: 100 },
     { nombre: 'Tablet', precio: 200 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 400 },
     { nombre: 'Celular', precio: 700 },
 ];

 //recorriendo un arreglo con forEach
meses.forEach( (mes, i) => {
    console.log(i); 
    console.log(mes);
    
    
});
// validar si existe abril con forEach
meses.forEach( (mes, i) => {
    if(mes === 'Abril'){
console.log(`encontrado en el indice: ${i}`);

    }
    
});


//encontrar el indice de abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//encontrar un indice en un arreglo de objecto
const indice2 = carrito.findIndex(producto => producto.precio === 700)
 console.log(`valor encontrado en ei indice: ${indice2}`);