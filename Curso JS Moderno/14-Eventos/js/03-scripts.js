//eventos sobre los input
    const busqueda = document.querySelector('.busqueda');
    busqueda.addEventListener('keydown',() => {
        console.log('escribiendo...');


    })

    busqueda.addEventListener('keyup',() => {
        console.log('escribiendo...');


    })

    busqueda.addEventListener('blur',() => {
        console.log('escribiendo...');


    })

    busqueda.addEventListener('copy',() => {
        console.log('escribiendo y copando...');


    })

    busqueda.addEventListener('paste',() => {
        console.log('escribiendo y pegando...');


    })

    busqueda.addEventListener('cut',() => {
        console.log('escribiendo y cortando...');


    })

    busqueda.addEventListener('input',(e) => {
        if(e.target.value === ''){
            console.log('fallo la validacion');

        }
        console.log(e.type);//nos dice sobre que elemnto esta trabajando
        console.log(e.target);//nos dice en que input en especifico
        console.log(e.target.value);//nos muestra lo que el usuario esta inscribiendo


    })