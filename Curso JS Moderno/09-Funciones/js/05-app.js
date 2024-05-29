//parametro y argumentos en funciones...

const numero1 = 20;
const numero2 = '20';

console.log(parseInt( numero2));// esto es una funcion

 console.log(numero1.toString());//esto es un metodo, que convierte un numero a un valor String

 function sumar(num1, num2) {//parametros de la funcion


    console.log(num1 + num2);

 }

 sumar(2 , 3);// // 2 y 3 sele conoce como argumentos

 function saludar(nombre,apellido){//nombre y apellido son parametros

    console.log(`hola: ${nombre} ${apellido} eres una mujer muy hermosa`);//esto es un templaString


 }

 saludar('shirly','vloria');//argumentos de la funcion