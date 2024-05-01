const prompt = require('prompt-sync')();
//? Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí 

/*  Requerimientos: Intercambiar los arreglos en caso de que se requiera, en el ejemplo presente se los intercambiar por estar desordenados.
    Entrada: elementos = [Primero, Segundo, Tercero, Cuarto, Quinto], todo = "", todo2 = "", espacio = ""
    Proceso: Para mostrar inicialmente los arreglos desordenados usamos "todo" para recorrer el arreglo y mostrarlo. 
             Luego intercambiamos los valores del primer y último elemento, para mostrar los arreglos ordenados usamos "todo2".
    Salida: Para la solucion del enunciado la salida sera <- elementos[todo2] = [Quinto, Segundo, Tercero, Cuarto, Primero]
!Pseudocódigo:
Algoritmo intercambiar_arreglos
	Dimension elementos[5]
	elementos[1] <- "Quinto "
	elementos[2] <- "Segundo "
	elementos[3] <- "Tercero "
	elementos[4] <- "Cuarto "
	elementos[5] <- "Primero "
	Escribir "Estos son los datos actuales: "
	Para todo <- 1 Hasta 5
		Escribir elementos[todo]
	FinPara
	espacio <- elementos[1]
	elementos[1] <- elementos[5]
	elementos[5] <- espacio
	Escribir "Los datos intercambiados a su orden: "
	Para todo2 <- 1 Hasta 5
		Escribir elementos[todo2]
	FinPara
FinAlgoritmo
*/

let elementos = ["Quinto", "Segundo", "Tercero", "Cuarto", "Primero"];
let vacio = ""

console.log("Estos son los datos actualmente: "+ elementos)
//Para arreglar el problema de los arreglos desordenados
vacio = elementos[0]
elementos[0] = elementos[4]
elementos[4] = vacio

console.log("Los datos intercambiados a su orden: "+ elementos)

