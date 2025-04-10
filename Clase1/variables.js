
//let: puede reasignarse pero NO redeclararse
let nombre2 = "Melissa";
//puedo despues sacarle el let y reasignarle un valor
nombre2 = "Juan";
console.log("Nombre: ", nombre2);

//declarar una variable SIN incializarla
let edad;
edad = 30;

//var: NO ES RECOMENDADO porque es reasignable y redeclarable
var nombre = "Melissa";
var nombre = "Julian";
console.log(nombre);


//const NO se puede reasgianr ni redclarar. Debe estar inicializada
const apellido = "Baran"



//undefined: variable que NO esta definida
var variable;
console.log(variable);

//tipos de variables
let texto = "texto";
let numero = 2;
let numerodouble = 2.5;
let verdadero = true;
let indefinido = undefined;
let nulo = null;
let array = [1, 2, "string", [2, 3, 4], true]

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof numerodouble);
console.log(typeof verdadero);
console.log(typeof indefinido);
console.log(typeof nulo);

//el tipo object tiene clave valor
let object = {
    nombre:"Matias",
    edad:13
}


//para acceder a un indice de un array
console.log( array[2]);

//Para acceder al valor de un objeto:
console.log("Objeto:");
console.log("Nombre: ", object["nombre"]);
console.log("Edad: ", object.edad);
console.log(object);

//si quiero que una clave tenga dos palabras
//ej: Nombre y Apellido
//lo pongo como String

//puedo agregar una variables del Objeto:
object.altura = 10.7;
console.log(object);
//y corregir/actualizar tambien
object.altura = 34;
console.log(object);








