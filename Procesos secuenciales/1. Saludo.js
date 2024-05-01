//Pedir al usuario su nombre y saludarlo
/*
Analisis de requerimientos: Variables y datos del problema
Entrada: Nombre = "Sebastian" leer
El proceso que se realizara con las variables para realizar el codigo
Proceso: "texto" + nombre + "texto"
El resultado del proceso
Salida: Hola "Sebastian", ¿como estas?  
*/ /*
 Pseudocodigo
 Algoritmo Saludo
	Definir nombre Como Caracter
	Escribir "Escriba su nombre:"
	Leer nombre
	Escribir "Hola" + nombre + ",¿como estas?"
FinAlgoritmo
*/
const prompt = require('prompt-sync')();

let nombre = prompt("Escriba su nombre");
console.log("Hola "+ nombre + " ,¿Como estas?"); 

// alert("Hola "+ nombre + " ,¿Como estas?"); 
