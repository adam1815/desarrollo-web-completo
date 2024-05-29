//objecto aninados
const producto = {
    nombre: 'monitor de 20" ',
    precio: 300,
    disponible: true,

    informacion: {
        peso: "1kg",
        medida: "1mt",
    },

    fabricacion : {
pais: "china",
    }

}
    //destructuring de object
    //const nombre = producto.nombre;
    //const { nombre, precio, disponible } = producto;
    //console.log(nombre);
    //const { precio } = producto;
    //console.log(precio);
    //console.log(disponible);
    
    
    //const { disponible } = producto;/console.log(disponible);
console.log(producto);
console.log(producto.informacion.peso.fabricacion);// accediendo ala informacion
