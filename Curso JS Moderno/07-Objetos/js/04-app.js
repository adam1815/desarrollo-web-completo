//agregar o eliminar propiedades del objeto
const producto = {
nombre: 'monitor de 20" ',
precio: 300,
disponible: true,
}
//destructuring de object
//const nombre = producto.nombre;
const { nombre, precio, disponible } = producto;
console.log(nombre);
//const { precio } = producto;
console.log(precio);
console.log(disponible);


//const { disponible } = producto;/console.log(disponible);