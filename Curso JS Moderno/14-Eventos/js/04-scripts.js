//eventos submit en un formulario
const formulario = document.querySelector('#formulario');

//funcion anonima flecha, se le pase el evento como parametro
formulario.addEventListener('submit',(validarFormulario) => {
    e.preventDefault();//permite que no se bra lo que esta en el action
    console.log('buscando...');
    console.log(e.target.method);//muestra el tpo de method de envio que esta utilizando
    console.log(e.target.action);//muestra hacia donde va este formulario o la accion



});

//creacion de function
function validarFormulario(e){//se le pasa el evento como parametro
    e.preventDefault();
    console.log('buscando...');
    console.log(e.target.method);//muestra el tpo de method de envio que esta utilizando
    console.log(e.target.action);//muestra hacia donde va este formulario o la accion
}

