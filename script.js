console.log("hola mundo")

// comentarios

/* 
comentarios de
multiples
lineas
*/



// Variables

// declaracion de la variable
let hobby;

console.log(hobby)

// inicializacion de la variable
hobby = "videojuegos"

console.log(hobby)

// reasignacion de la variable
hobby = "deportes de contacto"

console.log(hobby)

// declaracion e inicializacion de una variable
let otroHobby = "escalar"
console.log(otroHobby)

let tercerHobby = hobby
console.log(tercerHobby)
console.log(hobby)


// que no podemos o no debemos hacer al crear variables

// let 1fruta
// let const // palabras reservadas https://www.w3schools.com/js/js_reserved.asp

// let mifrutafavoritadelmundomundial
let miFrutaFavoritaDelMundoMundial // camelcase



let age = 30;
console.log(age)

age = 26
console.log(age)

// const

const name = "jorge"

console.log(name)

// name = "bob" // TypeError: Assignment to constant variable.

// var no la veremos ahora
// var es una palabra anticuada ES5-
// si alguna momento ven documentaciones que tiene var, cambienla a let o const


// tipos de data en JS

let variable1 = "hola mundo"
console.log(variable1, typeof variable1)

let variables2 = 20
console.log(variables2, typeof variables2)

let variables3 = true
console.log(variables3, typeof variables3)

let variables4 = { username: "bob" }
console.log(variables4, typeof variables4)

let variables5 = ["patatas"]
console.log(variables5, typeof variables5) // no es su propio tipo de data. es objetos

let variables6 = undefined
console.log(variables6, typeof variables6)

let variables7 = null
console.log(variables7, typeof variables7) // dice objeto por un bug de javascript. realmente es su propio tipo de data "null"


let username = null; // por ahora está vacia, pero mas adelante tendrá algun valor


// STRINGS

let fruit1 = "fresas"
let fruta2 = "peras"
let fruta3 = "bananas"

// concatenar strings
// let receta = "La receta para un smoothie lleva: " + fruit1 + " y " + fruta2

// interpolacion de strings ``
let receta = `La receta para un smoothie lleva: ${fruit1}, ${fruta2} y ${fruta3}`

console.log(receta)


// indexación


let simpleWord = "holkhasdkahbkwdbaiubsdnabdasdasd"
//                ||||
//                0123








// notacion de corchetes
console.log(simpleWord[0])

// .length para determinar la cantidad de caracteres
console.log(simpleWord.length)


// queremos imprimir la ultima letra de la palabra
console.log(simpleWord[ simpleWord.length - 1 ])


// metodos de strings

let otraPalabra = "Bananaramawakawakaehehsamiraira"

console.log( otraPalabra.indexOf("na") ) // -1 no la consigue

let seccionDePalabra = otraPalabra.slice( 4, 8 )
console.log(seccionDePalabra.toUpperCase())


// NUMBERS

let posNum = 18
let negNum = -70
let floatNum = 15.46

console.log(posNum, negNum, floatNum)


let num1 = 6;
let num2 = 2;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)

// % operador modulo
console.log(num1 % num2) // 2 + 2 + 2 = 6 => restante 0
console.log(13 % 2) // 2 + 2 + 2 + 2 + 2 + 2 = 12 => 1

console.log(87346827423 % 2) // 1. IMPAR
console.log(8734682342344 % 2) // 0. PAR



// operadores de asignación abreviados

let miEdad = 32

miEdad = miEdad + 1
console.log(miEdad)


miEdad += 1 // es EXACTAMENTE igual a : miEdad = miEdad + 1
console.log(miEdad)


miEdad++ // es EXACTAMENTE igual a : miEdad = miEdad + 1
console.log(miEdad)



// Coerción. Una acción automatica que ocurre en JS donde se modifican los tipos de data.

console.log(3 + 5)
console.log("3" + "5")

console.log("5" - "3") // "5" => 5    "3" =>3      5 - 3 = 2. 

console.log("Javascript" - "script") // NaN. Not a Number

console.log(4 + "5") // "45" JS intenta concatenar primero



// Objeto global Math.

let randomNumber = Math.random() // 0 + 0.9999999999
console.log(randomNumber)


let random10 = Math.random() * 10
console.log(Math.floor(random10))


let max = Math.min(50, 20, 10, 60, 200, 300)
console.log(max)


// BOOLEANS


let posBool = true;
let boolNeg = false;


console.log(posBool)

// operador NOT (de negación)

console.log(!posBool)
console.log(!boolNeg)

// operadores de comparación

let food1 = "hamburguesa"
let food2 = "pizza"
let food3 = "hamburguesa"

console.log(food1 === food2) // false
console.log(food1 === food3) // true
console.log(food1 !== food3) // false

let number1 = 12;
let number2 = 8;

console.log(num1 > num2)
console.log(num1 <= num2)

console.log("a" < "t") // 97 < 116 true
// .todos los caracteres en JS se analizan con su código ASCII


// === o ==
// === comparación estrictra
// == comparación flexible (permite coerción)

console.log("5" === "5") // true
console.log("5" === 5) // false
console.log("5" == 5) // true


// Operadores logicos

console.log("manzana" === "manzana" && "banana" === "pera") // false
//                    true          &&          false

// es true SOLO si todas las condiciones son true
// si al menos una es false, TODO es false


console.log("manzana" === "manzana" || "banana" === "pera") // true
//                    true          ||          false

// es false SOLO si todas las condiciones son false
// si al menos una es true, TODO es true

console.log("*** ACTIVIDAD ***")

// Guess the console input for each console.log

// Part 1.

console.log(true && false && true); // false
console.log((11 % 3) === 2); // true
console.log(false || !false); // true
console.log(false || (false && true)); // false
console.log(17 == '17'); // true
console.log((100 + 23) === '123'); // false
console.log('Hello' - 'llo'); // NaN

// Part 2.

let statement = 'i love javaScript!';

console.log(statement.indexOf("I")) // -1

let subStatement = statement.slice(7); // javaScript!
console.log(subStatement);

console.log(subStatement[0].toUpperCase())

subStatement.toUpperCase();
console.log(subStatement); 

// Javascript!
// javascript!
// JAVASCRIPT!
// error

console.log(statement)

// mutabilidad => los strings son inmutables.



// CONDICIONALES

let peras = 1
let naranjas = undefined;

if (naranjas === 0) {
  console.log("Te has quedado sin naranjas")
} else if (naranjas > 0 && naranjas <= 4) {
  console.log("tienes naranjas para hacer un zumo")
} else if (naranjas > 4) {
  console.log("tienes naranjas para hacer hacer zumo para todos!")
} else {
  console.log("la maquina de hacer zumo de daño, no la instruccion")
}



if (peras === 1) {
  console.log("tambien le puedes agregar peras")
}



// valores con aspectos thruty o falsy


// if (30 === 30) {
//   console.log("esto se imprime")
// }

if (0 || "" || undefined || null || false || NaN) {
  // .todos los valores son falsy
  console.log("esto se imprime?")
}

// if (0 == "") {
//   console.log("Esto ocurre?")
// }

let userFirstName = "Bob";

if (userFirstName) {
  console.log(`Hola ${userFirstName}, bienvenido a la página`)
} else {
  console.log(`Hola extraño, bienvenido a la página`)
}


// LOOPS

/* 

for ( 
variable control; 
condicion que indica cuando debe continuar el bucle;
expresion final que modifica variable control;
) {
  lo que se debe ejecutar X cantidad de veces en el loop
}

*/

for ( let patata = 5; patata <= 10; patata = patata += 0.5 ) {

  // let patata = 0 // esto ocurre una sola vez

  // if ( patata < 10) continua con el loop

  console.log(patata)

  // patata = patata + 1 // ocurre siempre al final de canda iteración

}

// for (let i = 0; i < 20000; i++) {
//   console.log(i)
// }


// loops que iteran por strings

let palabraCifrada = "B?!*??!n!!*!n?!*?!? !w1!w??!k!o???o!! 1!!???o";

// 1. reemplazar todas las "*" por "a"
// 2. eliminar todos los "!" y "?"
// 3. no tomar en cuenta despues del " "

let codigoSecreto = ""; // variable control que eventualmente será el resultado final

for (let i = 0; i < palabraCifrada.length; i++) {

  let caracter = palabraCifrada[i]

  // ...
  if (caracter === "*") {
    caracter = "a"
  } else if (caracter === "!" || caracter === "?") {
    // caracter = ""
    continue // salta este iteración
  } else if (caracter === " ") {
    break // detener el loop
  }

  codigoSecreto = codigoSecreto + caracter

}

console.log(codigoSecreto)





