class Usuario {
    nombre 
    usuario 
    correo 
    rol 
    
    agregar(usuario) {
        this.nombre = usuario;
        this.correo = usuario;
        this.rol = usuario;
    }

    eliminar(persona) {
        this.nombre = persona;
        this.correo = persona;
        this.rol = persona;
    }
}

let Usuario1 = new Usuario;
let Usuario2 = new Usuario;
let Usuario3 = new Usuario;
let Usuario4 = new Usuario;
let Usuario5 = new Usuario;
let Usuario6 = new Usuario;

// Usuario1.nombre = "Julio";
// Usuario2.nombre = "César";
// Usuario3.nombre = "Ana";
// Usuario4.nombre = "Luisa";
// Usuario5.nombre = "Rebeca";
// Usuario6.nombre = "Edgar";
localStorage.setItem("nombre", "Julio");
localStorage.setItem("nombre", "César");
localStorage.setItem("nombre", "Ana");
localStorage.setItem("nombre", "Luisa");
localStorage.setItem("nombre", "Rebeca");
localStorage.setItem("nombre", "Edgar");


localStorage.setItem('correo', 'julio@hoteles.gt');
localStorage.setItem('correo', 'cesar@hoteles.gt');
localStorage.setItem('correo', 'ana@hoteles.gt');
localStorage.setItem('correo', 'luisa@hoteles.gt');
localStorage.setItem('correo', 'rebeca@hoteles.gt');
localStorage.setItem('correo', 'edgar@hoteles.gt');
// Usuario1.correo = "julio@hoteles.gt";
// Usuario2.correo = "cesar@hoteles.gt";
// Usuario3.correo = "ana@hoteles.gt";
// Usuario4.correo = "luisa@hoteles.gt";
// Usuario5.correo = "rebeca@hoteles.gt";
// Usuario6.correo = "edgar@hoteles.gt";

Usuario1.rol = "Administrador";
Usuario2.rol = "Gerente";
Usuario3.rol = "Administrador";
Usuario4.rol = "Gerente";
Usuario5.rol = "Administrador";
Usuario6.rol = "Gerente";
