/*FUNCIONES EN OBJETOS
Y COMO ACCEDER
A SUS 
VALORES
*/

const nombre = "tablet";
const precio = 300;



const producto = {
    nombre: 'monitor  20"',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){

     console.log(`el producto: ${this.nombre} tiene un precio de: ${this.precio}`);   //la propiedad this busca los valores dentro del mismo objeto  

    }
    
    


    };
    
producto.mostrarInfo();//mando a llamar ala funcion mostrarInfo
 console.log(producto.mostrarInfo());
