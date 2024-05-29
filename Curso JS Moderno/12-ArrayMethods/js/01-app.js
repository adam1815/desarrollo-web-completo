const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//comprobar si un valor exite en un arreglo...

meses.forEach(mes => {
    if(meses ==='Enero'){

        console.log("enero si existe:");

   }
   
    
});

// includes se utiliza en los arreglos indexados

 const resultado = meses.includes('Enero');//metodo que verifica si enero exite dentro del arreglo indexado
 console.log(resultado);


 //.some se utilizan en los arreglos de objetos
const existe = carrito.some(producto =>  producto.nombre === 'Celular' );
console.log(existe);


//en un arreglo tradicional con .some
const existe2 =meses.some(mes  => mes === 'Febrero' ) 
console.log(existe2);