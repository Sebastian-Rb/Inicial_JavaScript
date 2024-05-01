//? Pedir al usuario un número y mostrar si es mayor o menor que 10. 

/*  Requerimientos: Variable para guardar el numero a comparar, condicional para comparar si el numero es mayor o menor que 10, mostrar el resultado en consola.
    Entradas: numero= "", 
    Proceso: variable numero < 10, condicion en caso de que sea faLso para que muestra que la variable es mayor que 10.
    Salidas: "El numero es mayor que 10" o "El numero es menor que 10"
!Pseudocodigo:
Algoritmo Mayormenor10
	Definir numero Como Entero
	Escribir "Ingrese un numero para saber si es mayor o menor que 10"
	Leer numero
	Si numero > 10
		Escribir "El numero ingresado es mayor que 10"
	Sino 
		Escribir "El numero ingresado es menor que 10"
	FinSi	
FinAlgoritmo
*/ 
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un numero para saber si es mayor o menor que 10: "));
if (numero > 10){
    console.log("El numero ingresado es mayor que 10");
}
else{ 
    console.log("El numero ingresado es menor que 10");
}
