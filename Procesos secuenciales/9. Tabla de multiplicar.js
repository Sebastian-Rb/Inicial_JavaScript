const prompt = require('prompt-sync')();

//? Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10. 

/*	Requerimientos: datos para la variable numero, uso de bucle for en js para cumplir con la solicitud
	Entrada: numero ="", m ="", resultado ="", m sera el el multiplicador y numero el multiplicando
	Proceso: numero se multiplica con m y luego se configura la salida del codigo para que ordene la tabla en forma de lista usando \n (Salto de linea)
			 Para el codigo js se va a usar un bucle for que funciona asi, se suma por uno los valores de la variable m, el cual es 1, se terminara cuando m sea igual o mayor que 10
			 La variable resultado sera igual al resultado del proceso, que consta de multiplicar numero * m cada vez que a m se le aumente valores
	Salida: La variable resultado, se mostrara la tabla multiplicar de la variable numero

!Pseudocodigo 
Algoritmo Tabla_multiplicar2
	Definir numero, solucion Como Entero
	Escribir "Escriba un numero para observar su tabla de multiplicar"
	Leer numero
	Para multiplicador <- 1 Hasta 10 Hacer
		solucion <- numero * multiplicador
		
		Escribir numero, "x", multiplicador, "=", solucion
	FinPara
FinAlgoritmo
*/

let numero = prompt("Escriba un numero para ver sus multiplos")
let resultado = "" //Variable vacia

for (let m=1; m <= 10; m++) { // La operacion usa la variable m se multiplicara con "numero" hasta 10 veces y se cumplira la condicion
    resultado += numero + "x" + m + "=" + numero * m + "\n" //Agregar el salto de linea (\n) para formar una lista
}
// += permite agregar a la variable el valor de la expresion y asignarlo nuevamente 

alert(resultado) //Mostramos la variable resultado

f
/* 
Otras opciones de hacerlo con alert
alert(numero + "x" + m + "=" + numero * m ); Se descarta por que no es entendible, en resumen todo el proceso se da en la salida del codigo */