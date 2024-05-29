//generar HTML con javascript

const enlace = document.createElement('A');//este metodo nos permite crear nuevos elementos
enlace.textContent = 'Producto';//agregandole el texto
//aagregandole href
enlace.href= 'nuevo_enlace';
enlace.target = '_blank';//agrega un target
console.log(enlace);//imprimiendo en consola

//seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace);//metodo que nos permite agregar un nuevo enlace al final
console.log(navegacion.children);//para saber la posicion de los elementos
navegacion.insertBefore(enlace, navegacion.children[1]);// insertamos el nuevo enlace en la posicion...


//crear un CARD
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('Titulo');
console.log(parrafo2);



const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por personas';
parrafo3.classList.add('Precio');
console.log(parrafo3);

// crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info);

// crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer4.jpg';
imagen.classList.add('img-fluid');//para que la imagen sea resposive
Image.alt ='TEXTO ALTERNATIVO';
console.log(imagen);

//crear el card
const card = document.createElement('div');
card.classList.add('card');
//asignar la imagen
card.appendChild(imagen);
//asignar info
card.appendChild(info);
console.log(card);

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);//inserta la card al final

//inserta la imagen al principio
contenedor.insertBefore(card, contenedor.children[0]);//inserta la card al inicio