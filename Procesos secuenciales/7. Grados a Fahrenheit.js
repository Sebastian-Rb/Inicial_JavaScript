const prompt = require('prompt-sync')();

// ? Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit. 

/*	Requerimientos: Datos solicitados al usuario (Temperatura), formula de conversion de grados a fahrenheit.
	Entrada: grados = "", fahrenheit = ""
	Proceso: Se usa la formula de Fahrenheit "celcius x 1,8 + 32" el resultado sera otorgado a la variable fahrenheit de esta forma ->
			 Fahrenheit = grados * 1,8 + 32 
	Salida: Se presenta el resultado -> "Su temperatura en Fahrenheit es:" se suma la variable farenheit al enunciado y su abreviatura 
!Pseudocodigo
Algoritmo Grado_Fahrenheit
	Definir grados Como Real
	Escribir "Escriba su temperatura en Grados"
	Leer grados
	Escribir "Su temperatura en Fahrenheit: " grados * 1.8 + 32 "°F"
FinAlgoritmo
 */
let grados = +prompt("Ingrese la temperatura en grados")
let fahrenheit = grados * 1.8 + 32 

alert("Su temperatura en Fahrenheit: "+ fahrenheit+ "°F")
