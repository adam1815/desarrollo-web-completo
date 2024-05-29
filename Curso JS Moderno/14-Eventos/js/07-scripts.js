//prevenir el event Bubbling con el delegation

const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click',(e) =>  {

    if(e.target.classList.contains('titulo')){
    console.log('diste click en el titulo');
    }
console.log(e.target.classList);//nos muestra donde estamos dando click
    if(e.target.classList.contains('precio')){
     console.log('diste click en el precio');
 }

 if(e.target.classList.contains('card')){
     console.log('diste click en el card');
 }

 });

