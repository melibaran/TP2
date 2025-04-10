//Bucle FOR
let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    console.log(`El numero con indice ${i} es `, num);
}

console.log("---");

//Bucle WHILE
let contador = -2;
while (contador < 0) {
    contador++;
    console.log(`El contador por ahora sigue siendo: ${contador}`);
}

console.log("---");

//Bucle WILHE con SWITCH
let opcion = 3;    
while(opcion !==0){
    switch(opcion){
        case 1:
            console.log("La opcion es la 1");
            break;
        case 2:
                console.log(`La opcion es la ${opcion}`);
                break;
        default:
                console.log("Opcion invalida");
                break;
        }
    opcion--;     
}

console.log("---");

//Bucle DO WHILE:
let marcador = 2;
do {
    console.log("Esto por ahora es: ", marcador);
    marcador++;
} while (marcador < 8);

console.log("---");

//For OF: Recorre los valores de arrays. Es como un foreach
const colores = ["Azul", "Rojo", "verde"];
for (const color of colores) {
    console.log("El color es: ", color);
}

console.log("---");

//For IN: Recorre las claves de los objetos
const persona={
    nombre:"Melissa",
    edad: 20,
    ciudad: "Buenos Aires"
}

for (const clave in persona) {
    console.log("La clave es: ", clave);
    console.log("El valor de la clave es: ", persona[clave]);
    
}
console.log("---");

//forEach: recorre todo con un nombre y un inidice. Es como un MAP (pero NO devuele un array, SOLO lo devuelve)
const numeross = [1, 2, 3, 4, 5];
//ponemos el valor y el indice
numeross.forEach((num, index) => {
    console.log(`ForEach devuelve ${index}: ${num}`);
});

console.log("---");

//MAP
const numerosNuevos = numeross.map(num=> num * num);
console.log(numerosNuevos);
    