//Funcion declarada
//se puede invocar antes de su desclarion por hosting
/*function saludar(nombre) {
    if(!nombre){
        return `Hola , quien eres?`

    }
    return `Hola , ${nombre}`
}*/

//si lo pongo solo asi, solo pongo el NOMBRE de la funcion
//console.log(saludar());

//console.log(saludar("Carlos"));


//Asignar el valor de la funcion a una variable
/*const despedir = function() {
    return `Adios, ${nombre}`
}
console.log(despedir(nombre));*/

//Funcion flecha o Arrow Function

const sumar = (a, b) => {
    return a + b
}

console.log(sumar(3, 5));

const persona = {
    nombre: "Luis",
    saludar: function(){
        return `Hola soy, ${this.nombre}`
    },
    adios: () =>  `Adios ${this.nombre}`,
    despedida() {
        return `Nos vemos luego ${this.nombre}`
    }
}
//usamos el this para decir que es ese nombre

console.log(persona);

let resultados;
const operaciones = (a, b) => {
    resultados.sumar = sumar(a, b)
}

operaciones(5,3);

console.log(resultados);
