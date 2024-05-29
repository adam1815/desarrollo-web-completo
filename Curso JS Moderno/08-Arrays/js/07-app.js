
//definir un producto
const producto = {
    nombre: 'monitor de 32"',
    precio: 300,
    
    };

    const producto3 = {
nombre: 'teclado ergonomico',
valor: 200,

    };

const carrito =[];

//carrito.unshift('laptop','tablet','smartphone','vestido','zapatos');// agregando elemento al inicio del arreglo
//carrito.push('medias');//agrega un elemento al final del arreglo
carrito.unshift(producto3);//agrega el objeto al inicio del arreglo
carrito.unshift(producto);//agrega el nuevo objeto al arreglo al inicio
for(let i = 0; i < carrito.length; i++)//recorriendo el arreglo
{
    
    console.log(carrito[i]);

}

let resultado = [...carrito,producto];//forma declarativa
console.table(resultado);
console.log(carrito);
resultado = [producto3, ...resultado];//obtiene una copia del mismo resultado y le agrega producto
console.log(resultado);

//eliminar ultimo elemento del arreglo...
//carrito.pop();
console.table(carrito);

carrito.splice(1,1);//recibe dos parametros el primer elemento a borrar y cuantos elemntos a borras