const prompt = require('prompt-sync')();

//	?Pedir al usuario dos números y mostrar el resultado de multiplicarlos. 

/*	Requerimientos: Datos numericos para las dos variables y operacion matematica usandolas
	Entrada: num1 = "", num2 = "", total = "" (Proceso)
	Proceso: Se multiplican las dos variables entre si y el resultado es el valor de la variable total -> total = num1 * num2
	Salida: Presentar el resultado -> El resultado de la multiplicacion es (variable total) 
!Pseudocodigo
Algoritmo Multiplicador
	Definir num1, num2, total Como Real
	Escribir "Escriba un numero para multiplicar" 
	Leer num1
	Escribir "Escriba un numero para multiplicar por " num1
	Leer num2
	total = num1 * num2
	Escribir "El resultado de su multiplicacion es: " total
FinAlgoritmo
 */

let num1 = +prompt("Escriba un numero para multiplicar")
let num2 = +prompt("Escriba un numero para multiplicar con "+ num1)
let total = num1 * num2

alert("El resultado de su multiplicacion es: "+ total) // alert si se ejecuta en navegador, console.log si es desde la terminal

