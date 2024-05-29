//como comunicar las funciones con otras funciones...

iniciarApp();//llamado de la funcion

function iniciarApp(){
console.log('iniciando app...');

segundaFuncion();// llamado de la segunda funcion desde adentro de la funcion


}

function segundaFuncion(){

    console.log('desde la funcion');
    UsuarioAutenticado('Adan');// llamado de funcion dentro de otra funcion


}

function UsuarioAutenticado(usuario){

    console.log('autenticando usuario espere por favor...');
    console.log(`usuario autenticado exitosamente: sr:${usuario}`);
}



