//añadir funciones en un objecto...
const reproductor = {
reproducir: function(id){

    console.log(`reproduciendo cancion con el id: ${id}`);
},
pausar: function (){
console.log(`pausando...`);

},
crearPlayLista: function(nombre){

    console.log(`creando la playList de: ${nombre}`);
},
reproducirPlayLista: function(nombre){
    console.log(`reproduciendo la playlista con el nombre: ${nombre}`);
}

};

reproductor.reproducir(35);//esto sele conoce como metodos de propiedades...
reproductor.reproducir(1);//esto sele conoce como metodos de propiedades...
reproductor.reproducir(9);//esto sele conoce como metodos de propiedades...
reproductor.reproducir(3);//esto sele conoce como metodos de propiedades...
reproductor.reproducir(5);//esto sele conoce como metodos de propiedades...
reproductor.reproducir(15);//esto sele conoce como metodos de propiedades...
reproductor.pausar();
reproductor.borrar = function (id){
    console.log(`borrando cancion con el id:${id}`);
}
reproductor.borrar(``);
reproductor.crearPlayLista('fade to black, metallica');
reproductor.crearPlayLista('jum van hellen');
reproductor.crearPlayLista('cinderella, no body fool');
reproductor.crearPlayLista('def leppar, hysteria');
reproductor.reproducirPlayLista('heavy metal');
reproductor.reproducirPlayLista('dead metal');
reproductor.reproducirPlayLista('glam metal');