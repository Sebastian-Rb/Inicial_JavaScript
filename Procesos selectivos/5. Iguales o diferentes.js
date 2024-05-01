//? Pedir al usuario dos números y mostrar si son iguales o diferentes. 

/*  Requerimientos: Los valores para la variables num1 y num2 que seran comparadas para saber si son iguales o diferentes
    Entrada: num1="", num2="" 
    Proceso: comparacion de num1==num2 y de la expresion condicional if y else
    Salida: "Los números son iguales" o "Los números son diferentes"
!Pseudocodigo
Algoritmo IgualDiferente
	Definir num1, num2 Como Real
	Escribir "Escriba 2 numeros, el primero: "
	Leer num1
	Escribir "Escriba el segundo numero a comparar: "
	Leer num2
	Si num1 = num2 Entonces
		Escribir "Los numeros escritos son iguales"
	SiNo
		Escribir "Los numeros son diferentes"
	FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Escriba 2 numeros, el primero: "))
let num2 = parseFloat(prompt("Escriba el segundo numero a comparar: "))

if (num1 == num2) {
    console.log("Los números son iguales")
} else {    
    console.log("Los números son diferentes")
}