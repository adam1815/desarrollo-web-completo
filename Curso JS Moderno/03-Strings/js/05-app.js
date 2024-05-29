// metodos replace 
 const producto = 'Monitor 20"';
console.log(producto);
console.log(producto.replace('pulgada','"'));// remplaza la cedan pulgada por las comillas dobles
console.log(producto.replace('Monitor','Monitor curvo'));// remplaza la cadena monitor, por monitor curvo...

//Metodo slice: permite extraer o cortar una cadena de texto...
console.log(producto.slice(0,10));

console.log(producto.slice(2,1));// si el primer numero es mayor que el segundo no hace nada...

//alternativa a slice...
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); //modifica el numero...

const usuario = "Adan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(1));

//metodo charAt
console.log(usuario.charAt(0));
