//seleccionar elmentos por su clase, (getElemntBysClassName)
const header = document.getElementsByClassName('header');
console.log(header);


const hero = document.getElementsByClassName('hero');
console.log(hero);// muestra la cantidad de clase hero que tenemos...


const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);// muestra la cantidad de clase contenedor que tenemos en la aplicacion


//si una clase no existe

const noExiste = document.getElementsByClassName('no-existe');//retorna como un arreglo vacio
console.log(noExiste);

