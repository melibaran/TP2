let comidas = ["banana", "verdura", {nombre: "Melissa"}]

console.log(comidas);

//PUSH metodos/funciones de arrays
//agregar un elemento al final del array:
comidas.push("Uva");
console.log(comidas);

//POP elimina el ultimo elemento del array
comidas.pop();
console.log(comidas);

//UNSHIFT agregar un nuevo elemnto al incio del array
comidas.unshift("Manzana");
console.log(comidas);

//SHIFT remueve el 1er elemento del array
comidas.shift();
console.log(comidas);


//MAP transforma cada el elemento del array y devuelve uno nuevo, segun la funcion
//recorre todo
let numeros = [1, 2, 3];
let numevosNumeros = numeros.map(num => num * num);
//devuekve un array, en el que cada elemento se va a multiplicar
console.log(numeros);
console.log("");

//ejemplo2
let usuarios = [{
    nombre: "Melissa",
    apellido: "Baran"
    },
    {
        nombre: "Candela",
        apellido: "Perez"
    }
]
console.log(usuarios);
console.log(usuarios[1]);
let usuariosNuevos = usuarios.map(user => {
    console.log("Cada usuario es:", user);
    
});

