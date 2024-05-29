//ejemplo con multiple funciones que pasan valores...
function sumar(a , b){

    return(a + b);//retorna el valor de a + b
}

const resultado = sumar(34 , 89);//el resultado retornado se le asigna ala variable resultado...
console.log(resultado);

//ejemplo mas avanzado...
let total = 0;
function agregarCarrito(precio){

    return (total += precio);



}

function calcularImpuesto(total){

return(total * 1.19);

}
total = agregarCarrito(300);
total = agregarCarrito(400);

total = agregarCarrito(500);
total = agregarCarrito(600);
total = agregarCarrito(700);

total = agregarCarrito(800);
const totalApagar = calcularImpuesto(total);

console.log(`subtotal es: $${total}\n valor total a pagar: $${totalApagar}`);