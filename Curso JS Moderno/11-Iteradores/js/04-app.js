//while loop
let i = 0;// inicializar variable... 
while ( i < 50){ //ciclo while
   
i++;
console.log(`el numero es: ${i}`);


 if(i % 15 == 0){// condicion a evaluar multiplo de 15
    


        console.log(`FIZ BUZZ: ${i}`);
        

     }

     else if(i % 3 == 0){
     console.log(`BUZ: ${i}`);//condicion a evaluar multiplo de 3


     }
     else if(i % 5 == 0){
         console.log(`FIZZ: ${i}`);// condicion a evaluar multiplo de 5


     }




}