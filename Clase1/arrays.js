let comidas = ["banana", "verdura", {nombre: "Melissa"}]
//los arrays son mutables, y pueden tener elementos de cualquier tipo!

console.log(comidas);

//METODOS DE ARRAYS:
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
console.log("");


//MAP transforma cada el elemento del array y devuelve uno nuevo, segun la funcion
//recorre todo
let numeros = [1, 2, 3, 4, 5];
let mostrarNumeros = numeros.map(num => "Numero: " + num);
let numevosNumeros = numeros.map(num => num * num);
//devuelve un array, en el que cada elemento se va a multiplicar
//lo tengo que poner en una variable nueva, para que quede el nuevo array
console.log(numeros);
console.log(mostrarNumeros);
console.log(numevosNumeros);
console.log("");

//FILTER: recorre 1 por 1 cada elemento, filtrando cada elemento segun la condicion y devuelve un nuevo array
let mayoresA3 = numeros.filter(num => num >= 3)
console.log(mayoresA3);

//REDUCE: reduce el array a UN solo valor, acumulandolo en el acumulador
//el 0 va a ser como se incializa el acumulador
let sumaArray = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(sumaArray);
//con esto, se irian sumando todos los elementos del array y se van acumulando

//FIND: devuelve el PRIMER elemento que cumpla con la condicion
let busqueda = numeros.find(num => num>= 2 );
console.log(busqueda);

//SOME: devuelve true/false, si al menos UN elemento cumple con la condicion
let encontrado = numeros.some(num => num == 4);
console.log("Algun elemento cumple con la condicion?: ", encontrado);

//EVERY: devuelve true si TODOS los elementos cumplen la condicion
let encontrado2 = numeros.every(num => num<10);
console.log("TODOS los elementos cumplen con la condicion?: ", encontrado2);

//JOIN: Convierte el array a String y los separa a cada elemento por el separador que indiquemos en el join 
let nuevoString = numeros.join(" - ");
console.log(nuevoString);

//SLICE: retorna una copia, incorporando los elementos que estan entre los que indiquen
//se debe poner un start y un end
//se incluye el num del end, pero NO el del start
let arrayNuevo = numeros.slice(2, 4);
console.log(arrayNuevo);

//REVERSE: invierte todos los elementos del array
//muta el original!!
let invertido = numeros.reverse();
console.log(invertido);

//SPLIT: modifica el array, eleminando un elemento y reemplazandolo por otro, retorna el elemento eliminado 
//Reemplaza el de la 2da posicion, solo 1 elemenot por el numero 99
//devuelve el emento eliminado
//muta el original!!
let reemplazo = numeros.splice(1, 1, 99);
console.log(reemplazo);
console.log(numeros);

//CONCAT: concatena el array con otro array
let arrayConcatenado = numeros.concat(comidas);
console.log(arrayConcatenado);


//El string siempre predomina, ya que sirve para concatenar:
//console.log("Hola" + 27);
//CONCATENAR STRINGS:
"Hola" + "como estas";




