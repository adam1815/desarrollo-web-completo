 //iteradores en javascript break y continue...


for(let i = 0; i <= 10; i++){
    if(i === 5){
    console.log(`cinco: ${i}`);
   //break;// genera una pausa, hasta la linea donde esta definido el break 
    continue; // continua la ejecucion del codigo
    }

    else {
        console.log(`el numero es: ${i}`);
     
    }
    }

    //forEach para iterar un arrays

const carrito = [
    {nombre: 'monitor 27"', precio: 300, disponible: true, marca: 'hp'},
    {nombre: 'tablet 7"', precio: 90, disponible: true, marca: 'lg', descuento: true},
    {nombre: 'televisor 27"', precio: 400, disponible: true, marca: 'samsung'},
    {nombre: 'smart phone 7"', precio: 800, disponible: true, marca: 'xaomi'},
];

 for(let i = 0; i < carrito.length; i++){
if(carrito[i].descuento){

    console.log(`${carrito[i].nombre} -- precio: ${carrito[i].precio} -- descuento:${carrito[i].descuento}`);
}

}
   

//arrays metodos
 carrito.forEach( function(producto) {

     console.log(`${producto.nombre} -- precio: ${producto.precio} -- ${producto.marca} -- ${producto.disponible}`);

 }
 )
