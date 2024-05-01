// Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento. 

/*  Requerimientos: Arreglo de 5 elementos, condicionales
    Entradas: arreglo = [5], arreglo[0], arreglo[4], condicionales
    Proceso: Se requiere condicional para saber si el primer elemento es mayor que el ultimo
    Salida: mensaje
!Pseudocodigo
Algoritmo Arreglo5
    Dimension arreglo[5]
    arreglo[1] <- "Mesa "
	arreglo[2] <- "Casa "
	arreglo[3] <- "Silla "
	arreglo[4] <- "Cama "
	arreglo[5] <- "Escritorio "
        Si arreglo[1] > arreglo[5] Entonces
            Escribir "El primer elemento es mayor que el ultimo"
        Sino
            Escribir "El primer elemento no es mayor que el ultimo"
        FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let arreglo = ["Mesa", "Casa", "Silla", "Cama", "Escritorio"];

if (arreglo[0] > arreglo[4]) {
    console.log("El primer elemento es mayor que el ultimo");
} else {
    console.log("El primer elemento no es mayor que el ultimo");
}
