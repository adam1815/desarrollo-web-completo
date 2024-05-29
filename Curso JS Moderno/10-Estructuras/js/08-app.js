//detener la ejecucion de if con una funcion...

 const autenticado = true;

 if(autenticado){// toma el valor de auteticado por defecto...
     console.log(`usuario autenticado:`);

 }
 else{
     console.log('usuario no auntenticado!!!');
 }

const puntaje = 500;

function revisarPuntaje(){
    if(puntaje > 400) {

        console.log('excelente');
        return;
        
   
    }
    
     if(puntaje > 300){
        console.log('buen puntaje!!!');
        return;
    
    }
    
    else{
        console.log('puntaje muy bajo');
    }
    


}
revisarPuntaje();


// if(puntaje > 400) {

//     console.log('buen puntaje... felicidades');
//     return;
    

// }

//  if(puntaje > 300){
//     console.log('excelente!!!');
//     return;

// }

// else{
//     console.log('puntaje muy bajo');
// }

// else if(puntaje > 400)
// {
// console.log('excelente');
// }

