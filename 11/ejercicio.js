class cuenta {
    número_de_cuenta
    Nombre
    saldo
    monto(debito, credito){
        const debito = credito-debito;
        const credito = saldo+credito;
        return debito;
    }
    consulta(){
        const saldo = saldo+credito;
        return saldo;
    }

}

let cuenta1 = new cuenta();
cuenta1.número_de_cuenta = "021-234-45";
cuenta1.Nombre = "Julia";
cuenta1.saldo = "Q.600.000";
console.log(cuenta1.monto(20000, 6000));
console.log(cuenta1);
console.log(cuenta1.consulta);

let cuenta2 = new cuenta();
cuenta2.número_de_cuenta = "021-243-54";
cuenta2.Nombre = "Pedro";
cuenta2.saldo = "Q.12000.000";
console.log(cuenta2.monto(2000, 5000));
console.log(cuenta2);
console.log(cuenta2.consulta);