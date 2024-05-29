//do while loop

let i = 0;// inicializacion de variable

do
{// ciclo do while

if(i % 15 == 0){// condicion a evaluar multiplo de 15
console.log(`FIZ BUZZ: ${i}`);

}
else if(i % 5 == 0){// condicion a evaluar multiplo de 5
    console.log(`FIZ: ${i}`);
 

}
else if(i % 3 == 0){// condicion a evaluar multiplo de 3

    console.log(`BUZZ: ${i}`);


}
i++;
}
while(i < 50);// ciclo whilw