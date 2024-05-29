let elemento;
elemento = document;
elemento = document.all;//selecciona todo el documento,
elemento = document.head;// selecciona todo los elemntos de head
elemento = document.body;// selecciona todos los elemntos del body
elemento = document.domain;// seleccional host donde se esta trabajando
elemento = document.forms;//accede a todos los elemntos del formulario
elemento = document.forms[0];//accede al elemento de la coleccion en la posicion 0
elemento = document.forms[0].id;//accede al id del formulario
elemento = document.forms[0].method;//accede al methodo del formulario
elemento = document.forms[0].classList;//accede ala clase
elemento = document.forms[0].action;// accede al action del forms
elemento = document.links;//accede a todos los elemntos links del proyecto
elemento = document.links[4];//accede al link con el indice 4
elemento = document.links[4].classList;//accede al link con el indice 4 y ala clase y la retorna como un arreglo
elemento = document.links[4].className;//accede al link con el indice 4 y ala clase y lo retorna como un String
elemento = document.images;//muestra la cantidad de magenes que tiene el stio web
elemento = document.scripts;// muestra la cantidad de scripts que tiene el sitio web
console.log(elemento);