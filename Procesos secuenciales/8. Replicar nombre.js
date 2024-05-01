const prompt = require('prompt-sync')();

//? Pedir al usuario su nombre y mostrarlo tres veces en la pantalla. 

/*	Requerimientos: Datos y variables, se puede usar bucles para llegar a la solicitud empleada, pero solo cumpliremos con el enunciado.
	Entrada: nombre = ""
	Proceso: Sumar 3 veces el nombre en la salida del codogio, para mostrarlo de manera listada se usa un salto de linea "\n"
	Salida: La variable nombre repetida 3 veces una debajo de otra.

!Pseudocodigo:
Algoritmo Nombre_tresveces
	Definir nombre Como Caracter
	Escribir "Inserte su nombre"
	Leer nombre
	Escribir nombre
	Escribir nombre
	Escribir nombre
FinAlgoritmo
 */

let nombre = prompt("Escriba su nombre")

alert(nombre + "\n" + nombre + "\n" + nombre ) //Se usa \n para crear un salto de linea y se repita el nombre.
console.log(nombre + "\n" + nombre + "\n" + nombre )
