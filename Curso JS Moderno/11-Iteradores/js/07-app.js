//for of


 const   pendiente = ['leer','estudiar','correr','dormir','practicar','aprender javascript'];//inicializacion del arreglo
 pendiente.forEach((pendiente, indice) => {//function arrow

 console.log(`${indice}: ${pendiente}`);

 });


 //map
 pendiente.map((pendiente, indice) => {//function arrow

     console.log(`${indice}: ${pendiente}`);
   
     });
// for of iteras sobre arreglos
 for (let valor of pendiente)
    {
        console.log(`${pendiente}`);

    }

    const carrito = [
       {nombre: 'monitor 32"', marca: 'acer', precio: 500},
       {nombre: 'televisor 32"',  marca: 'hp', precio: 500},
       {nombre: 'tablet 6"', marca: 'acer', precio: 180},
       {nombre: 'smarphone 5"', marca: 'xaomi', precio: 800},

];


