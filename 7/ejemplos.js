// ejemplo1
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// ejemplo2
for (let i = 1; i < 10; i++) {
    console.log("2 * " + i + " = " + 2 * i);
}
// ejemplo3
for (let i = 1; i <= 10; i++) {
    console.log("2 * " + i + " = " + 2 * i);
}
// ejemplo4
for(let i = 1; i < 11; i++){
    console.log("3 * " + i + " = " + 3 * i);
}
// ejemplo5
for(let i = 1; i <= 11; i++){
    console.log("3 * " + i + " = " + 3 * i);
}
// ejemplo6
for(let i = 10; i > 0; i--){
    console.log("3 * " + i + " = " + 3 * i);
}
// ejemplo7
for(let i = 10; i > 0; i--){
    if (i === 4) {
        break;
    } 
        console.log("3 * " + i + " = " + 3 * i);
    }
// ejemplo8
for(let i = 10; i > 0; i--){
    console.log("4 * " + i + " = " + 4 * i);
    if (i == 4) {
        break;
    }
}
// ejemplo9
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// ejemplo10
var i = 1;
while (i <= 10) {
    console.log("2 * " + i + " = " + 2 * i);
    i++;
}
// ejemplo11
var numero = 0;
while (numero < 11) {
    console.log("4 * " + numero + " = " + 4 * numero)
    numero++;
}
// ejemplo12
while (true) {
    var numero = Math.floor(Math.random() * 100);
    console.log(numero);
    if (numero === 45) {
        break;
    }
}
// ejemplo13
var i = 1;
do{
    console.log(i);
    i++;
} while (i <= 10);
// ejemplo14
do{
    var numero = Math.floor(Math.random() * 100);
    console.log(numero);
    if (numero === 45) {
        break;
    }
} while (numero < 8);
// ejemplo15
var numero = 5;
do {
    console.log("Hola Mundo " + numero)
} while (numero < 2);
// ejemplo16
var numeros = 5;
do {
    console.log("Hola Mundo "+ numeros)
    numeros--;
} while (numeros >0);