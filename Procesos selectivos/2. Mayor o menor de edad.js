//? Solicitar al usuario su edad y mostrar si es mayor o menor de edad. 

/*  Requerimientos: Variable para guardar la edad a comparar, condicional para comparar si la edad es mayor o menor que 18, mostrar el resultado en consola.
    Entradas: edad= "",
    Proceso: variable edad < 18, condicion en caso de que sea faLso para que muestra que la variable es mayor que 18.
    Salidas: Resultado de la comparacion entre la variable y la operacion, salida de la condicion "Usted es mayor de edad" o "Usted es menor de edad"
!Pseudocodigo:
Algoritmo Mayormenoredad
	Definir edad Como Entero
	Escribir "Escriba su edad para verficiar su acceso: "
	Leer edad
	Si edad > 18 Entonces
		Escribir "Usted es mayor de edad"
	SiNo
		Escribir "Usted es menor de edad"
	FinSi
FinAlgoritmo
*/
const prompt = require('prompt-sync')();
let edad = parseInt(prompt("Escriba su edad para verificar si es mayor de 18: "))
if (edad >= 18) {
    console.log("Usted es mayor de edad")
} else {
    console.log("Usted es menor de edad")
}
