//method querySelectorAll
const card =document.querySelectorAll('nav');
console.log(card);// retorna todos los elemntos nav

const card1 =document.querySelectorAll('.info');
console.log(card1);// retorna todos los elementos de la clase info

const formulario = document.querySelectorAll('#formulario');
console.log(formulario);// muestra en pantalla los formulario que tenga la pagina

const noExiste = document.querySelectorAll('no-existe');
 console.log(noExiste);//retorna un arreglo vacio