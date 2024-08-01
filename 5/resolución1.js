const numero1 = parseInt(prompt('digite un numero'));
const numero2 = parseInt(prompt('digite un segundo numero'));
const numero3 = parseInt(prompt('digite un numero final'));

if (numero1 > numero2) {
    if (numero1 > numero3) {
        if (numero2 > numero3) {
            console.log(numero1, numero2, numero3);
        } else {
            console.log(numero1, numero3, numero2);
        }
    }
}else{
    if(numero2 > numero3){
        if (numero1 > numero3) {
            console.log(numero2, numero1, numero3);
        } else {
            console.log(numero2, numero3, numero1);
        }
    } else {
        console.log(numero1, numero2, numero3);
    }
}