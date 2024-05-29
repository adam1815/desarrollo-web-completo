//cambiando el CSS con javascripts
// const encabezado = document.querySelector('h1');
// console.log(encabezado);
// encabezado.style.backgroundColor = 'black';//modifica el color del encabexado a azul
// encabezado.style.fontFamily = "arial";//modificamos la fuente desde javascript 
// encabezado.style.textTransform = "uppercase";// transformamos el texto a mayuscula

const card = document.querySelector('.card');
card.classList.add('nueva-clase');//metodo para agregar una nueva clase
card.classList.remove('nueva-clase');//metodo para borrar una clase
console.log(card .classList);
