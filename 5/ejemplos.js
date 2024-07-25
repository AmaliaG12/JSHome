let telefono = "858574-j";
let tel = Number(telefono);
console.log(telefono.replace("-", ""));
console.log(telefono.split("-"));

let edad = "33 años";
let edadParseada = parseInt(edad);
console.log(edadParseada);

let telefono2 = "4128-3339";
let tel2 = Number(telefono2);
console.log(telefono2.replace("-", "/"));

let edad2 = "33.5 años";
let edadParseada2 = parseFloat(edad2);
console.log(edadParseada2);

let bultos = "75.8 bultos";
let bultosParseados = parseFloat(bultos);
console.log(bultosParseados);

let json = '{"nombre": "Juan"}';
console.log(JSON. parse(json));

let json2 = '{"nombre": "Juan", "edad":30, "ciudad":"rosario"}';
console.log(JSON.parse(json2));

