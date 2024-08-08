class persona {
    cui
    nombre
    apellido
    fecha_nacimiento
    género
    estatura

    saludar(){
        console.log("Hola me llamo ", this.nombre);
    }
    velocidad(distancia,tiempo){
        const vel = distancia/tiempo;
        return vel;
    }
    static saltar(){
        console.log("La persona salta");
    }
    constructor(cui, nombre, género){
        this.cui = cui
        this.nombre = nombre
        this.género = género
        this.saludar();
    }
}
persona.saltar();
let persona1 = new persona();
persona1.cui = "12323123123123";
persona1.nombre = "Roberto";
persona1.apellido = "Girón";
persona1.apellido.fecha_nacimiento = "12/8/2004";
persona1.género = "masculino";
persona1.estatura = "1.90";
console.log(persona1);
persona1.saludar();
console.log(persona1.velocidad(10,5));
