let operador = prompt('¿Qué operación desea hacer: 1 - Sumar || 2 - Restar || 3 - Multiplicar || 4 - Dividir');
console.log(operador);
let numero1 = Number(prompt('Ingrese el primer número'));
console.log(numero1);
let numero2 = Number(prompt('Ingrese el segundo número'));
console.log(numero2);
let total;
console.log(total);
if (operador == 1) {
    total = numero1+numero2
    console.log('El resutado de la suma es'+total);
}else if (operador == 2) {
    total = numero1-numero2
    console.log('El resutado de la resta es'+total);
}else if (operador == 3) {
    total = numero1*numero2
    console.log('El resutado de la multiplicación es'+total);
}else if (operador == 4) {
    total = numero1/numero2
    console.log('El resutado de la división es'+total);
}else{
    console.log('opción incorrecta');
}



