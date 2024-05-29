//querySelector

const card = document.querySelector('.card');//retorna el elemnto que encuentre de muchos,
console.log(card);

//podemos tener selectores especificos como en css
const info = document.querySelector('.info .premium');
console.log(info);

//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');//se selcciona la section luego el hospedaje y la clase del hospedaje y luego la segunda clase
console.log(segundoCard);

//seleccionar el formulario con queryselector
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);