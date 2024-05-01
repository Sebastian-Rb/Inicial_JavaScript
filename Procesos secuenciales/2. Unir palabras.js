//?Pedir dos palabras y presentarlas concatenadas
/*
Requerimientos: Variables y operaciones para resolver la solicitud
Entrada: primera = "pseudo" Leer, segunda = "codigo" leer
Proceso: concatenar en una variable las variables primera y segunda -> unido = primera + segunda 
Salida: Presentar la nueva variable unido -> "Esta es su palabra concatenada: pseudocodigo"
*/ /*
 !Pseudocodigo:
Algoritmo Unir_palabras
	Definir primera, segunda Como Caracter
	Escribir "Escriba su primera palabra"
	Leer primera
	Escribir "Escriba su segunda palabra"
	Leer segunda
	Escribir "Esta es su palabra concatenada :" primera + segunda
FinAlgoritmo
*/
const prompt = require('prompt-sync')(); //Linea de codigo para ejecutar prompt

let palabra1 = prompt ("Escriba su primera palabra");
let palabra2 = prompt ("Escriba su segunda palabra");
let unido = palabra1 + palabra2;

alert("Esta es su palabra concatenada: "+ unido);
