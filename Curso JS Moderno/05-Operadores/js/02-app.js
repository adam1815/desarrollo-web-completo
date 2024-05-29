const numero1 = 20;
const numero2 = "30";
const numero3 = 30;

//revizar si dos numeros son iguales...
console.log(numero1 == numero2);
console.log(numero2 == numero3);//compara si dos numeros son iguales
console.log(parseInt (numero2) === numero3);//compara si dos numeros son identicos
console.log(typeof  numero1);
console.log(typeof parseInt (numero2));//convierte el valor de la variable a un valor entero

//diferente

const password1 = "admin";
const password2 = "Admin";
console.log(password1 != password2);

//comparador extricto si es diferente a
console.log(numero1 !== parseInt(numero2));