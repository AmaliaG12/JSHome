class cuenta {
    //atributo
    id;
    nombre;
    tipoCuenta;
    saldo;
    //inicializador
    constructor(id, nombre, tipoCuenta, saldo){
        this.id = id
        this.nombre = nombre
        this.tipoCuenta = tipoCuenta
        this.saldo = saldo
    }
    //métodos
    abonar(dinero){
        this.saldo += dinero;
    }
    debitar(monto){
        this.saldo -= monto;
    }
    consultaSaldo(){
        console.log('Hola, bienvenid@ ' ${this.nombre}. \n 'Tu saldo es de: ' ${this.saldo})
    }
}
let cuenta1 = new cuenta(1000);
let cuenta2 = new cuenta(7500);
cuenta1.consultaSaldo();
cuenta1.abonar(900);
cuenta1.consultaSaldo();
cuenta1.debitar(500);
cuenta1.consultaSaldo();
cuenta2.consultaSaldo();
cuenta2.abonar(900);
cuenta2.consultaSaldo();
cuenta2.debitar(500);
cuenta2.consultaSaldo();
