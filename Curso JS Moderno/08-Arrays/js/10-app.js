//forEach para iterar un arrays

const carrito = [
    {nombre: 'monitor 27"', precio: 300, disponible: true, marca: 'hp'},
    {nombre: 'tablet 7"', precio: 90, disponible: true, marca: 'lg'},
    {nombre: 'televisor 27"', precio: 400, disponible: true, marca: 'samsung'},
    {nombre: 'smart phone 7"', precio: 800, disponible: true, marca: 'xaomi'},
];

 //arrays metodos
 const nuevoArreglo2 = carrito.forEach( function(producto) {

     return(`${producto.nombre} -- precio: ${producto.precio} -- ${producto.marca} -- ${producto.disponible}`);

 }
 )
 console.log(nuevoArreglo2);
 

 //..map para iterar un arrays y sus diferencias con forEach: ,map crea un nuevo arreglo y forEach no
const nuevoArreglo = carrito.map( function(producto) {

    return(`${producto.nombre} -- precio: ${producto.precio} -- ${producto.marca} -- ${producto.disponible}`);

}
)
console.log(nuevoArreglo);