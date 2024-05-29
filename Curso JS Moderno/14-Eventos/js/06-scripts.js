//event Bubbling
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();// este metodo detiene la ejecucion por defecto, del event Bubbling
console.log('click en el card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log('click en el info');
 });


    titulo.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
    console.log('click en el titulo');
        
    });