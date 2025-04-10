//Funcion DECLARADA
//se puede invocar antes de su desclarion por hoisting, 
//es decir, la puede usar antes de que sea declarada (en las otras, primero la declaro y abajo se usa donde sea)
function saludar(nombre) {
    if(!nombre){ //o nombre===undefined
        return `Hola , quien eres?`

    }
    return `Hola , ${nombre}`
}

//si lo pongo solo asi, solo pongo el NOMBRE de la funcion
console.log(saludar);
console.log(saludar());
console.log(saludar("Carlos"));

//Funcion ANONIMA:
//Asignar el valor de la funcion a una variable
const saludaar = function(nombre){
    return `Hola ${nombre}`; 
  }

const despedir = function(nombre) {
    return `Adios, ${nombre}`;
}
console.log(despedir("Carlos"));
console.log("------");


//Funcion flecha o Arrow Function
//const nombreFuncion = () => {}  ASI ES LA ESTRUCTURA
const sumar = (a, b) => {
    return a + b;
}
console.log(`El resultado de la suma1 es: ${sumar(3, 5)}`);

//se puede hacer SIN return:
//const nombreFuncion = () => "Hola";
//cuando esta en la misma linea, el return es implicito y no se agregan los {}
const sumar2 = (a, b) => a + b;
console.log(`El resultado de la suma2 es: ${sumar2(5, 1)}`);

const multiplicar = (a, b) => a * b;
console.log(`El resultado de la multiplicacion es: ${multiplicar(10, 5)}`);
console.log("------");


const persona = {
    nombre: "Luis",
    saludar: function(){
        //si queremos acceder a la variable "nombre" usamos THIS, que hace referencia a lo propio de ese objeto
        return `Hola soy, ${this.nombre}`;
    },
    //funcion flecha
    adios: () =>  `Adios ${this.nombre}`,
    //lo que hace por detras es que hace un despedida: despedida {} etc ect, pero para no repetir se pued eponer directamente la funcion
    despedida() {
        return `Nos vemos luego ${this.nombre}`;
    }
}
//usamos el this para decir que es ese nombre
console.log(persona);
console.log(persona.despedida());
console.log(persona.saludar());


//puede haber una funcion global, que tenga dentro funciones
let resultados = {};
const operaciones = (a, b) => {
    resultados.sumar = sumar(a, b);
    resultados.multiplicar = multiplicar(a,b)
}

operaciones(5,3);

console.log(resultados);
