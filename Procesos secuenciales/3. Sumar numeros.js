const prompt = require('prompt-sync')();

// ?Solicitar al usuario dos números y mostrar su suma. 

/*	Requerimientos: datos, variables y operacion 
	Entrada: num1 = "2" leer, num2 = "4" leer. total = "6" (proceso)
	Proceso: la operacion suma da valor a total -> total = num1 + num2
	Salida: Presentar la variable total -> "Su resultado es 4" 
	
!Pseudocodigo:	
Algoritmo Sumar_Numeros
	Definir num1, num2 Como Entero 
	Escribir "Escriba su primer numero"
	Leer num1
	Escribir "Escriba su segundo numero"
	Leer num2
	Escribir "Su resultado es: " primer + segundo	
FinAlgoritmo
*/
let numero1 = +prompt("Escriba un número a sumar");
let numero2 = +prompt("Escriba un segundo número a sumar");
let total = numero1 + numero2; 

alert("El total de la suma es: "+ total);

