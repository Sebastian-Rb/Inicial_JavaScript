//? Solicitar al usuario un número y mostrar si es positivo o negativo. 

/*  Requerimientos: datos para la variable numero, operacion para saber si numero es positivo o negativo.
    Entrada: numero= "", 
    Proceso: Comparar el numero con 0 y verificar si es mayor o menor, asi se determina si es positivo o negativo
             numero > 0 sera positivo y numero < 0 sera negativo
    Salida: Mostrara si el numero es positivo o negativo.
!Pseudocodigo
Algoritmo PositivoNegativo
	Definir numero como Real
	Escribir "Escriba un numero para saber si es positivo o negativo"
	Leer numero
	Si numero > 0
		Escribir "El numero ingresado es positivo"
	SiNo
		Escribir "El numero ingresado es negativo"
	FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Escriba un numero para saber si es positivo o negativo: "));
if (numero > 0) {
    console.log("El numero ingresado es positivo");
} else { 
    console.log("El numero ingresado es negativo");
}
