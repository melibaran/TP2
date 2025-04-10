//para objetos, en gral usamos const!!

saludar = function() {
    return "Hola como estan?";
}

let materias = ["lengua", "mate"];

const familia = {
    apellido: "baran"
}

const usuario = {
    nombre: "Melissa",
    edad: 20,
    activo: true,
    hablar: function(){
        return "Hola";
                //podria ponerlo como let mesnaje = "Hola" y hacer un return mensaje
    },
    saludar, //(seria lo mismo que hacer saludar:saludar, como pongo dos veces la misma variable, puedo ponerla una vez)
    //puede tener otro objeto
    familia:familia,
    materias,
    //tambien puedo poner alguna variable q cree aca y abajo la modifico
    mascotas: null
}

console.log(usuario);
usuario.mascotas = 3;
console.log(usuario);


//si lo ponemos asi nos muestra la funcion
console.log(usuario.hablar);
//si lo ponemos asi nos muestra lo q retorna la funcion
console.log(usuario.hablar());


//ejemplo2
const usuarios = [{
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
