const usuario = prompt('Ingresa tu nombre de Usuario');
switch (usuario) {   
    case 'LuisaAmalia':
        console.log('Usuario Correcto');
        break;
        default:
            console.log('Usuario Incorrecto');
        break;
}
const contraseña = prompt('Ingresa tu contraseña');
switch (contraseña) {
    case '1208':
        console.log('Contraseña Correcta');
        break; 
    default:
        console.log('Contraseña Incorrecta')
        break;
}