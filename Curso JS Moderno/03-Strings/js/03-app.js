//concatenar un String y templade String

const producto = ' Monitor 20" ';
console.log(producto);

const precio = '30 usd';
console.log(precio);

//  concatenar con el metodo concat
console.log(producto.concat(precio));
console.log(producto.concat(precio));
console.log(producto.concat('en descuentos'));
console.log(producto + " con un precio " + precio); // otra forma de concatenar...
console.log(" el producto" + producto + "tiene un precio de " + precio);//cocatena las variable con un String


// templade String en Es6 se usa backtick o comillas inclinadas
console.log(`el producto ${producto} tiene un precio de: ${precio}`);


// concatenar:
console.log("el producto" , producto , " tiene un precio de: $" ,  precio); 

