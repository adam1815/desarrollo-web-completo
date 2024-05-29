
// const producto = {
//     nombre: 'monitor de 32"',
//     precio: 300,
//     disponible: true,
//     }

//     //destructuring de objectos
//     const {nombre} = producto;
//     console.log(nombre);

    //destructuring de arrays
const numeros = [10,20,30,40,50];
const [primero,segundo, ...tercero] = numeros;//extrae valores de otro lugar
console.log(primero);// la primera y segunda coma reemplaza el valor de la primera y segunda posicion
