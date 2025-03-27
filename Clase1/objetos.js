//para objetos, en gral usamos const

saludar = function() {
    return "Hola como estan?"
}

const familia = {
    apellido: "baran"
}

const usuario = {
    nombre: "Melissa",
    edad: 20,
    activo: true,
    hablar: function(){
        return "Hola"
    },
    saludar, //(seria lo mismo que hacer saludar:saludar, como pongo dos veces la misma variable, puedo ponerla una vez)
    //puede tener otro objeto
    familia
}

console.log(usuario);

//si lo ponemos asi nos muestra la funcion
console.log(usuario.hablar);
//si lo ponemos asi nos muestra lo q retorna la funcion
console.log(usuario.hablar());
