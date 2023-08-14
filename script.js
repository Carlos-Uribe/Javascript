// Ejemplo algoritmo sencillo para sumar dos números
console.log("Algoritmo para sumar dos números");
console.log("Paso a paso:");
console.log("1. Obtener el primer número a sumar");
console.log("2. Obtener el segundo número a sumar");
console.log("3. Adicionar la cantidad del segundo número al primer número");
console.log("4. Almacenar el resultado");
console.log("5. Mostrar el resultado");

// Paso 1: Obtener el primer número a sumar
var numero1 = prompt("Paso 1: Ingrese el primer número a sumar");

// Paso 2: Obtener el segundo número a sumar
var numero2 = prompt("Paso 2: Ingrese el segundo número a sumar");

// Convertir las cadenas de texto capturadas en enteros usando parseInt
var entero1 = parseInt(numero1);
var entero2 = parseInt(numero2);

// Paso 3: Adicionar la cantidad del segundo número al primer número
var resultado = entero1 + entero2;

// Paso 4: Almacenar el resultado (esto ya está implícito en JavaScript)

// Paso 5: Mostrar el resultado usando la función alert
alert("Paso 5: El resultado de la suma es: " + resultado);