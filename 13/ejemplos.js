class cuenta {
    id
    nombre
    saldo = 200

    abonar(dinero) {
        this.saldo += dinero;
        this.consultaSaldo();
    }
    debitar(monto) {
        this.saldo -= monto;
    }
    consultaSaldo() {
        console.log()
    }
}