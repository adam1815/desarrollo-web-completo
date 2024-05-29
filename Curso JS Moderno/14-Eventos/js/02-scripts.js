//Eventos que ocurren con el Mouse

const nav = document.querySelector('.navegacion');

//registrar un evento  cuando damos click
nav.addEventListener('click', () => {
    console.log('click en nav');
  

})


//registrar un evento cuando pasamos por la navegacion
nav.addEventListener('mouseenter', () => {
  
    console.log('entrando ala navegacion');
  
})

nav.style.backgrounColor = 'transparent';

//registrar un evento cuando salimos de la navegacion
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion navegacion');
    nav.style.backgrounColor = 'white';

})
// mousedown es similar a click
// click 
//dblclick = doble click
//mouseup cuanso sueltas el mouse

