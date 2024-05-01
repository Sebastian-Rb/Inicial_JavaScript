const prompt = require('prompt-sync')();

// ?Pedir al usuario un número y mostrar su doble.

/*	Requerimientos: datos para la variable que se va a duplicar y operacion para dar el resultado
	Entrada: numero = "" (Leer) total = "" (proceso)
	Proceso: dar total el valor de numero multiplicado por 2 -> total = numero * 2
	Salida: Presentar resultado -> El resultado es "total"
!Pseudocodigo
Algoritmo Doble_numero
	Definir numero Como Entero
	Escribir "Escriba un numero para saber su duplo"
	Leer numero
	Escribir "El resultado es: " numero * 2
FinAlgoritmo
*/

let numero = prompt("Escriba un numero que quieras dublicar");
let duplo = numero * 2 ;

alert("El resultado de la operacion es: "+ duplo);
