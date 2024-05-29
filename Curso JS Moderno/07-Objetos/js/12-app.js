//object literal
const producto = {
    nombre: 'monitor  20"',
    precio: 300,
    disponible: true,
    };
    
/* console.log(producto.nombre);
 console.log(producto.precio);
 */console.log(producto.disponible);

 //Object constructor
function producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("monitor 24inch",500);
console.log(producto2.nombre);
console.log(producto2.precio);