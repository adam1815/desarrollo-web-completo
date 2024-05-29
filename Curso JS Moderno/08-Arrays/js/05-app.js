/*//agregar nuevo elementoa un arreglo al principio o al fin
const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto'];
console.table(meses);//imprime el valor del arreglo en forma de tabla

//meses[7] ='septiembre' ;
//agregar al final del arreglo
meses.push('septiembre')//metodo que agrega un nuevo elemento al final del arreglo
meses.unshift('navidad');//agrega una elemento al inicio del arreglo


for(let i = 0; i < meses.length; i++){//recorre el arreglo
    console.log(meses[i]);

}

*/

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

