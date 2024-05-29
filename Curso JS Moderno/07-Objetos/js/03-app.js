//agregar o eliminar propiedades del objeto
const nombre = 'monitor 20"';
const precio = 300;
const disponible = true;

// object literal
const producto = {
nombre: 'monitor 20"',
precio: 300,
disponible: true,
};

//agregar nuevas propiedades al objecto
// por fueras del objecto
producto.imagen = "imagen.jpg";
producto.video = "metallica.mpg4";
delete producto.video;
console.log(producto);

//borrar propiedades del objecto
delete producto.imagen; 
console.log(producto);



