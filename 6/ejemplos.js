// ejemplo1
const numero = 8;
if (8 > 1) {
    console.log('8 es mayor que 1');
}else{
    console.log('8 es menor que 1');
}

// ejemplo2
const numero1 = -8;
if (8 < 1) {
    console.log('8 es mayor que 1');
}else{
    console.log('8 es menor que 1');
}

// ejemplo3
const edad = 25;
if (edad > 18) {
    console.log('Él puede entrar a la película');
}else if (edad > 13) {
    console.log('Entra con supervisión de un adulto');
}else{
    console.log('No puede entrar a la película');
}

// ejemplo4
const edades = 18;
switch (edades) {
    case 5:
        console.log('tienes 5 años');
        break;
        case 10:
        console.log('tienes 10 años');
        break;
    default: 
    console.log('no tienes 5 ni 10 años');
        break;
}

// ejemplo5
const mes = prompt("Ingresa tu mes");
switch (mes) {
    case '1':
        console.log('Este es el mes de Enero')
        break;
    case '2':
        console.log('Este es el mes de Febrero')
        break;
    case '3':
        console.log('Este es el mes de Marzo')
        break;
    case '4':
        console.log('Este es el mes de Abril')
        break;
    case '5':
        console.log('Este es el mes de Mayo')
        break;
    case '6':
        console.log('Este es el mes de Junio')
        break;
    case '7':
        console.log('Este es el mes de Julio')
        break;
    case '8':
        console.log('Este es el mes de Agosto')
        break;
    case '1':
        console.log('Este es el mes de Enero')
        break;
    case '9':
        console.log('Este es el mes de Septiembre')
        break;
    case '10':
        console.log('Este es el mes de octubre')
        break;
    case '11':
        console.log('Este es el mes de Noviembre')
        break;
    case '12':
        console.log('Este es el mes de Diciembre')
        break;

    default:
        console.log('No es un mes válido')
        break;
}

// ejemplo6
const opciones = prompt("Ingresa tu opción");
console.log('|-------------------------------|');
console.log('|       1. Iniciar Juego        |');
console.log('|       2. Cargar Juego         |');
console.log('|       3. Salir                |');
console.log('|-------------------------------|');
switch (opciones) {
    case '1':
        console.log('|------------------------------|');
        console.log('|1.         Partida 1          |');
        console.log('|2.         Partida 2          |');
        console.log('|3.         Partida 3          |');
        console.log('|------------------------------|');
const Partida = prompt("Ingresa tu partida");
        switch (Partida) {
            case '1':
                console.log('Has seleccionado la partida 1')
                break;
            case '2':
                console.log('Has seleccionado la partida 2')
                break;
            case '3':
                console.log('Has seleccionado la partida 3')
                break;
            default:
                console.log('No es una partida válida')
                break; 
            }
            break;
        case '2':
            console.log('Has seleccionado cargar juego')
            break;
        case '3':
            console.log('Has seleccionado salir')
            break;
        default:
            console.log('No es una opción válida')
            break;
}