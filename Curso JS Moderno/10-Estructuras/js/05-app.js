//switch para evaluar multiple condiciones

const metodoDePago = 'efectivo';


switch (metodoDePago) {
    case 'efectivo':
        pagar();
        console.log(`pagaste con: ${metodoDePago}`);
        break;

        case 'tarjeta':
            console.log(`pagaste con: ${metodoDePago}`);
            break;
            case 'cheque':
                console.log(`pagaste con: ${metodoDePago}`);
                break;


    default:
    console.log(`aun no ha seleccionado un metodo de pago:`);
        break;
}

function pagar(){

    console.log('pagando...');
}