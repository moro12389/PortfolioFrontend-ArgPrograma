
//Creación de objeto JSON con funcion new Object
var JSONobj_1= new Object();
//JSON en formato string
var JSONobj_2 = '{"Nombre":"Lautaro","Apellido":"Moroni"}';
//JSON vacio
var JSONobj_3 = {};

JSONobj_1.nombre = "Lautaro";
JSONobj_1.apellido = "Moroni";
JSONobj_3.nombre = "Lautaro";
JSONobj_3.apellido = "Moroni";
console.log("Nombre: " + JSONobj_1.nombre + ", Apellido: " + JSONobj_1.apellido);
console.log(JSONobj_1);
console.log(JSONobj_3);
//Transformacion de json en formato string a objeto con función Json.parse()
console.log(JSONobj_2);
JSONobj_2 = JSON.parse(JSONobj_2);
console.log("Transformación Correcta");
console.log(JSONobj_2);

//Carga de archivo datos.json y utilización
const JSONDatos= require('datos.json');

console.log(JSONDatos);
