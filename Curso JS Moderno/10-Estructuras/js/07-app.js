//operador OR para que se cumpla almenos una condicion
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalApagar = 600;



if(efectivo > totalApagar || credito > totalApagar || disponible > totalApagar)
    {// evalua la condicion que se cumpla por lo menos una vez
    console.log('si puedes pagar');

}

else {
    console.log('fondos insuficientes');
}