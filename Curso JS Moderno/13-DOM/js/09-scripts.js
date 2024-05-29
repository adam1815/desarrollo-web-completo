//eliminar elementos en el DOM

// const primerEnlace = document.querySelector('a');
// primerEnlace.remove();//remove un elemento
// console.log(primerEnlace);

//eliminar elemento desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children[1]);
navegacion.removeChild(navegacion.children[2]);// remueve el elemento en posicion 2
console.log(navegacion);