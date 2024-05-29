//forEach para iterar un arrays

const carrito = [
    {nombre: 'monitor 27"', precio: 300, disponible: true, marca: 'hp'},
    {nombre: 'tablet 7"', precio: 90, disponible: true, marca: 'lg'},
    {nombre: 'televisor 27"', precio: 400, disponible: true, marca: 'samsung'},
    {nombre: 'smart phone 7"', precio: 800, disponible: true, marca: 'xaomi'},
];

 for(let i = 0; i < carrito.length; i++){

    console.log(`${carrito[i].nombre} -- precio: ${carrito[i].precio}`);
 }

//arrays metodos
 carrito.forEach( function(producto) {

     console.log(`${producto.nombre} -- precio: ${producto.precio} -- ${producto.marca} -- ${producto.disponible}`);

 }
 )