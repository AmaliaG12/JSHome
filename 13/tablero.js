class tablero {
    fila
    columna
    trampasFila
    tableroTrampas = []
    constructor (fila, columna, trampasFila) {
        this.fila = fila;
        this.columna = columna;
        this.trampasFila = trampasFila;
    }
    tableroInicial(){
        for (let i = 0; i < this.fila; i++) {
            let filaTrampas = []
            for (let j = 0; j < numeroTrampa; j++) {
                filaTrampas.push(" ")
            }
            const numeroTrampa = this.generarNumero(4,1);
            for (let j = 0; j < numeroTrampa; j++) {
                const coordenada = this.generarNumero(this.columna - 1, 0) filaTrampas[coordenada] = " #"
            }
            this.tableroTrampas.push(filaTrampas);
        }
    }



    generarNumero(max, min){
        let trampasMax = 4
        let trampasMin = 1
        this.trampasFila = Math.floor(Math.random() * (trampasMax - trampasMin + 1) + trampas)
    }


    imprimirTablero(){
        let numero = this.columna * this.fila;
        let columnas = '--------------------------------- \n'
        for (let i = 0; i < this.fila; i++) {
            let filas = ''
            for ( let j = 0; j < this.columna; j++) {
                if(numero < 10) {
                    filas += '|  ' + numero + '  |'
                } else {
                    filas += '| ' + numero + ' |'
                }
                numero--;
            }
            columnas += filas + "\n"
            columnas += '------------------------------- \n'
        }
        console.log(columnas);
    }
}
const tabla = new tablero(5,7,1);
tabla.imprimirTablero();
