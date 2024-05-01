const prompt = require('prompt-sync')();

//	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año. 

/*	Requerimientos: Las variables de edad y edadprox que sera la edad que tendra el proximo año despues de una operacion matematica
	Entrada: edad = "" Leer, edadprox = "" 
	Proceso: Sumar 1 a la variable edad, el resultado sera el valor de la variable edadprox -> edadprox = edad + 1
	Salida: Presentar la edad que tendra el usuario en un año -> "Su edad en un año es ___"

!Pseudocodigo
Algoritmo Edad_proximo_año
	Definir edad Como Entero
	Escribir "Revise su edad dentro de un año."
	Escribir "Indique su edad: "
	Leer edad
	edadprox = edad + 1
	Escribir "Su edad en un año es: " edadprox
FinAlgoritmo
 */

let edad = +prompt("Inserte su edad") //Se coloca un + antes del prompt para que el valor se tome como un numero y no como valor alfanumerico
let edadprox = edad + 1 

alert("Su edad dentro de un año usted cumplira: "+ edadprox)
