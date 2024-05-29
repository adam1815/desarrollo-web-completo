// diferencia entre function expresion y declaration

//declaracion de funciones...

sumar();//en ese caso si se genera resultado
function sumar() {

    console.log(2 + 9);
    
    } 
    
    // llamado de la funcion
    //sumar();
    
    
    // expresion de funciones
    //llamado de la funcion ante de ser declarada
    sumar2();//en este caso se genera un error
    const sumar2 = function() { 

        console.log(3 + 6);
    }
    
    // llamado  de la funcion
    //sumar2();
    
    
    