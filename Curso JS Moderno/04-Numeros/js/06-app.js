//convertir String a numeros

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;
console.log(typeof numero1);// muestra el tipo de dato que pertenece 

console.log(Number.parseInt(numero1));// convierte un String a un numero entero
console.log(Number.parseFloat(numero2));
console.log(Number.toString(numero3));


// podemos revizar si un numero es entero o no...
console.log(Number.isInteger(numero3));// retorna un false por que el valor es un String
console.log(Number.isInteger(numero4));// retorna un true por que el valor es un entero