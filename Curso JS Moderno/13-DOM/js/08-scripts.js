//transversing the DOM

 const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);// trae el primer elemento
console.log(navegacion.lastElementChild);// trae el ultimo elemento

//console.log(navegacion.childNodes);// los espacios en blanco son considerado como elementos
//console.log(navegacion.children);//lista elementos reales del html


//console.log(navegacion.children[1].nodeName);
//console.log(navegacion.children[2].nodeType);

const card = document.querySelector('.card');
//console.log(card.children[1].children[1] = 'nuevo heading desde transvering the dom');
// card.children[0].src ='img/hacer2.jpg';
// //console.log(card.children[1].children[1].textContent); 
// console.log(card.children[0]);//recorremos hijos

//transversing del hijo al padre
// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);
// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);


// const  ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);