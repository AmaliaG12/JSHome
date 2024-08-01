const operaciones = prompt('Escoge la operación');
console.log('1.-------Sumar--------');
console.log('2.------Restar--------');
console.log('3.-------Salir--------');
switch(operaciones) {
    case '1':
        const numero1 = Number(prompt('Ingresa un número'));
        console.log(numero1);
        const numero2 = Number(prompt('Ingresa el segundo número'));
        console.log(numero2);
        console.log(numero1 + numero2);
        break;
    case '2':
        const numero3 = Number(prompt('Ingresa un número'));
        console.log(numero3);
        const numero4 = Number(prompt('Ingresa un segundo número'));
        console.log(numero4);
        console.log(numero3 - numero4);
        break;
        default:
            console.log('No es una opción válida');
            break;
    case '3':
        console.log('Has seleccionado Salir');
        break;
}
