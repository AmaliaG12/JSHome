const numero1 = parseInt(prompt('Digite un número'));
const numero2 = parseInt(prompt('Digite otro número'));
const numero3 = parseInt(prompt('Digite otro número'));

if (numero1 > numero2) {
    if (numero1 > numero3) {
        if (numero2 > numero3) {
            console.log(numero3, numero2, numero1);
        } else {
            console.log(numero1, numero3, numero2);
        }       
    }   
}else{
    if (numero2 > numero3) {
        if (numero1 > numero3) {
            console.log(numero2, numero1, numero3);
        } else {
            console.log(numero2, numero3, numero1);
        }
    } else {
        console.log(numero3, nuemro2, numero1);
    }
}