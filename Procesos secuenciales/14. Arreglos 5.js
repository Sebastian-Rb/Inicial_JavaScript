//? Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo 
/*  Requerimientos: Usando los elementos de un arreglo usar js para presentar los elementos primero, del medio y último.
    Entrada: elementos: [Mesa, Casa, silla, cama, escritorio]
    Proceso: Presentar el primer, el del medio y el último elemento del arreglo
    Salida: Mesa, silla, escritorio
!Pseudocodigo
Algoritmo Arreglodenombres
	Dimension elementos[5]
	elementos[1] <- "Mesa "
	elementos[2] <- "Casa "
	elementos[3] <- "Silla "
	elementos[4] <- "Cama "
	elementos[5] <- "Escritorio "
	
	Escribir "Se muestra en pantalla el primer, el de en medio y el ultimo elemento del arreglo"
	Escribir elementos[1] , elementos[3] , elementos[5]
FinAlgoritmo
*/ const prompt = require('prompt-sync')();

let elementos = ["Mesa", "Casa", "Silla", "Cama", "Escritorio"];

console.log("Se muestra en pantalla el primer, el de en medio y el ultimo elemento del arreglo");
console.log(elementos[0] , elementos[2] , elementos[4]);

