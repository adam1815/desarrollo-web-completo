// for in


//const numero = ['mouse','teclado','cpu','monitor','impresora'];

 const carrito = [
        {nombre: 'monitor 32"', marca: 'acer', precio: 500},
        {nombre: 'televisor 32"',  marca: 'hp', precio: 500},
        {nombre: 'tablet 6"', marca: 'acer', precio: 180},
        {nombre: 'smarphone 5"', marca: 'xaomi', precio: 800},

 ];
// for in itera sobre objetos
for (let producto in carrito)
    {
        console.log(`${producto}`);
        
    }

const automovil = {
modelo: 'camaro',
motor: '6.0',
año: '1965',
};
    

// es7 incorporo nuevo metodo
for(let {valor ,llave}of Object.entries(automovil)){console.log(llave);}


 for(let propiedad in automovil){
     console.log(`${automovil.modelo}`);
     console.log(`${automovil.motor}`);
     console.log(`${automovil.año}`);


 }
