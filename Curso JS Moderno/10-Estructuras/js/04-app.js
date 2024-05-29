//mayor o igual  y else if

const dinero = 1000; 
const totalaPagar = 500;
const tarjeta = true;
const cheque = true;



if(dinero >= totalaPagar){
console.log(`tienes dinero para comprar: ${dinero}`);

}

else if (tarjeta){

console.log(`puedo pagar con la tarjeta:`);

}
else if(cheque){
console.log('podemos pagar con el cheque')

}
else {

    console.log('fondos insuficientes:')
}


    
    
