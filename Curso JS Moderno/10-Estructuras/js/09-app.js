//operador ternario...

const autenticado = true;
const puedePagar = false;
console.log(autenticado || puedePagar  ? 'si puedes pagar:' : 'No puedes pagar:');// operador ternario!!!


const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {

if(efectivo > totalPagar){
    console.log('si pagaste con efectivo');

}
else{
    console.log('otra forma de pago...');
}


}
else {

    console.log('fondos insuficientes');
}

console.log(autenticado ? puedePagar? 'si esta autentica y puede pagar': 'si esta autenticado pero no pueda pagar': 'no esta autenticado');
//ternario aninado