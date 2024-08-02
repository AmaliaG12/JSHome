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