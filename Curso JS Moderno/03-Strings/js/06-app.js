//metodos repeat te va repetir una cadena de texto...
const producto = 'Monitor 32"';
console.log(producto.repeat(2,2)); // repite la cadena 2 veces
console.log(producto.repeat(1,2)); // solo muestra la cadena una sola vez...

const Texto = "en promosion".repeat(3);//repite tres veces el texto...
console.log(Texto);
console.log(`${producto} ${Texto}!!!!`);// la cadena de texto se repite 3 veces...


// metodo split permite dividir un String...
const Actividad = "estoy aprendiendo javascripts moderno";
console.log(Actividad.slice(" "));// permite colocar espacio en cada una de las palabras...

const hobbiet = " leer,caminar,escuchar musica,escribir,aprender a programar";// divide la cadena donde tenga las comas...
console.log(hobbiet.slice(","))