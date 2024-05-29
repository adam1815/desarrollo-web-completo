document.addEventListener('DOMContentLoaded', function() {
    const email = {
        email: '',
        asunto: '',
        mensaje: '',


    };
    

//seleccionar los elementos del interfase
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');
const btnSumit = document.querySelector('#formulario button[type = "submit"]');

//asignar eventos, y pasar una funcion como parametro
inputEmail.addEventListener('input', validarInformacion);
inputAsunto.addEventListener('input', validarInformacion);
inputMensaje.addEventListener('input', validarInformacion);

function validarInformacion(e){
    console.log(e.target.parentElement.nextElementSibling);
    if(e.target.value.trim() === ''){ // trim() elimina los espacios en blanco
        mostrarAlerta(`el campo ${e.target.id} es obligatorio...`, e.target.parentElement);//le pasamos temple string
        email[e.target.name] = ''; 
        comprobarEmail();
        return;

}
if(e.target.id  === 'email' && !validarEmail(e.target.value)){
mostrarAlerta('el email no es valido', e.target.parentElement);
email[e.target.name] = '';
comprobarEmail();
return;
};

limpiarAlerta(e.target.parentElement);
//asignar los valores
email[e.target.name] = e.target.value.trim().toLowerCase();
//comprobar el objeto de email
comprobarEmail();

}

//creando una alerta de error en al validacion
 function mostrarAlerta(mensaje, referencia){
  limpiarAlerta(referencia);
    
    //generar alerta en el html
const error = document.createElement('P');
error.textContent = mensaje;
error.classList.add('bg-red-600','text-white','p-2','text-center');
//inyectar el error al formulario
referencia.appendChild(error);// agrega un nuevo elemento al ya existente
//formulario.innerHTML = error.innerHTML;//otra forma utilizando el innerhtml
 }

function limpiarAlerta(referencia){
const alerta = referencia.querySelector('.bg-red-600');
if(alerta){
    alerta.remove();
    return; //detiene la ejecucion del codigo
    }
    
}
function validarEmail(email){
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
}
function comprobarEmail(){
if(Object.values(email).includes('')){
    btnSumit.classList.add('opacity-50');
    btnSumit.disable = true;
return;    

}
btnSumit.classList.remove('opacity-50');
btnSumit.disable = false;

}

});

  
