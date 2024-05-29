//agregar nuevos valores al arreglo

const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto'];
console.table(meses);//imprime el valor del arreglo en forma de tabla

meses[7] ='septiembre' ;// agrega un nuevo elemento al arreglo

for(let i = 0; i < meses.length; i++){//recorre el arreglo
    console.log(meses[i]);

}