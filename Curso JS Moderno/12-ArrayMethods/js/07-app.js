//arrays metodos concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
const meses2 = ['agosto','septiembre']
const meses3 = ['octubre','noviembre','dicienbre']
// con .concat
const resultado = meses.concat(meses2);
console.log(resultado);

//spread Operator
const resultado2 = [... meses, ... meses2, ... meses3, 'otro mes'];//concatena  dos o mas elemento de un arreglos y agrega nuevo elemento al arreglo
console.log(resultado2);
const resultado3 = [... meses, ... meses2, ... meses3, ... 'otro mes'];
console.log(resultado3);
/*
agrega 8 elementos mas al arreglo

*/
