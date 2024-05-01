//? Pedir al usuario un número y mostrar si es par o impar. 

/*  Requerimientos: Los valores para mostrar si el numero es par o impar.
    Entradas: numero= ""
    Proceso: Dividir un numero con 2 para saber si es par o impar y devolver un mensaje.
             Si numero % 2 == 0 
              El numero es par 
             Sino 
             El numero es impar
    Salida: Segun el numero dado "El numero es par" o "El numero es impar"
!Pseudocodigo:
Algoritmo NumeroParImpar
	Definir numero Como Real
	Escribir "Escriba un numero para verificar si el numero es par"
	Leer numero
	Si numero % 2 == 0
		Escribir "El numero ingresado es par"
	SiNo
		Escribir "El numero es impar"
	FinSi
FinAlgoritmo
*/ 
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Escriba un numero para verificar si el numero es par: "));
if (numero % 2 == 0){
    console.log("El numero ingresado es par");
} else {
    console.log("El numero es impar");
} 
