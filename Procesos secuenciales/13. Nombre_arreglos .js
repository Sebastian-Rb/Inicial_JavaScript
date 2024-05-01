const prompt = require('prompt-sync')();

//? Dado un arreglo de 5 nombres presentarlos todos 

/*  Requerimientos: A partir de un arreglo con valores dados presentar todos en la consola, mensaje, etc.
    Entrada: nombres [Juan, Clau, Isabel, Sebas, Iris]
    Proceso:
    Salida:

!Pseudocodigo
Algoritmo nombres_arreglos
	Dimension nombres[5]
	Definir nom_arreglos como entero
	nombres[1] <- "Juan"
	nombres[2] <- "Clau"
	nombres[3] <- "Isabel"
	nombres[4] <- "Sebas"
	nombres[5] <- "Iris"
	
	Escribir "Los nombres son"
	Para nom_arreglos <- 1 Hasta 5 Hacer
		Escribir nombres[nom_arreglos]
	FinPara
FinAlgoritmo
*/

let nombres = ["Juan", "Clau", "Isabel", "Sebas", "Iris"]
console.log("Los nombres en su arreglo son: " + nombres)
