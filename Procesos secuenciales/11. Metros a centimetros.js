//? Solicitar al usuario una distancia en metros y mostrarla en centímetros. 

/*  Requerimientos: Datos y variables, formulas de conversion de metros a centimetros
    Entrada: cm = "", mt = ""
    Proceso: Se usa la formula de conversion (centimentros = metros * 100), se da el resultado a la variable cm
    Salida: centimetros = metros * 100

!Pseudocodigo:
Algoritmo Metros_centimetros
	Definir cm, mt Como Entero
	Escribir "Escriba su medida en metros para convertirlas en centimetros"
	Leer cm
	mt <- cm * 100
	Escribir cm "m es igual a " mt " centimetros"
FinAlgoritmo
*/
const prompt = require('prompt-sync')();
let metros = prompt("Escriba unidades metricas para convertirlas a centimetros")

centimetros = metros * 100
console.log(metros + "m es igual a "+ centimetros + "cm")

