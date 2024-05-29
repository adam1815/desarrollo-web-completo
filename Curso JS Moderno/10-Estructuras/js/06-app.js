
// operador and && evalua que ambas condiciones se cumplan...
const usuario = true;
const puedePagar = true;


if(usuario && puedePagar){
console.log(`si eres usuario:\n
puedes pagar:`);//operador && revisa que se cumpla mas de dos condiciones
}

if(!usuario && !puedePagar){
    console.log(`no puedes comprar:\n`);//operador && revisa que se cumpla mas de dos condiciones
}

else if(!usuario)
{
console.log('registrate o inicia sesion');
}

else if(!puedePagar){
console.log('no tienes los fondos suficientes!!!');
}


 