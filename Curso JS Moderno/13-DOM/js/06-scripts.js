//MODIFICAR TEXTO O IMAGEN CON JS
const encabezado = document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';
console.log(encabezado);


 console.log(encabezado.innerText);// si en el CSS visibility: hiden: no lo va a encontrar

 // otra forma
 // console.log(encabezado.textContent);// si lo va encontrar

 console.log(encabezado.innerHTML);//se trae el HTML

//SELECCIONAR IMAGENES
const imagen = document.querySelector('.card img');// selecciona la card img
console.log(imagen);
imagen.src = 'img/hacer2.jpg';//modificando imagen desde javascript  