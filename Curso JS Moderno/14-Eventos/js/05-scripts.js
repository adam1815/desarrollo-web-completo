//evento al dar scroll con el mouse

window.addEventListener('scroll', () => {
// console.log('scrolling');
// const scrollPX = window.scrollY;
// console.log(scrollPX );
const premium = document.querySelector('.premium');
const ubicacion = premium.getBoundingClientRect();
console.log(ubicacion);
if(ubicacion.top < 100){
    console.log('el elemento ya esta visible');

}
else{
    console.log('aun no da mas scroll');
}



});
