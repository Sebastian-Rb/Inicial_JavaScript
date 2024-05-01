const prompt = require('prompt-sync')();

//? Pedir al usuario dos números y mostrar el mayor. 

/* Requerimientos: Dos valores para variables y uso de condiciones
   Entrada: num1 = "", num2 = ""
   Proceso: Se usa condicionales if y else para comparar ambos numeros, sea verdadero o falso mostraran un mensaje de acorde a la condicion
   Salida: Sea mayor o menor -> num1 es el numero o mayor, o, num 2 es el numero mayor.
!Pseudocodigo
Algoritmo Numero_Mayor
	Definir num1, num2 Como Entero
	Escribir "Escriba un numero"
	Leer num1
	Escribir "Escriba otro numero"
	Leer num2
	Si num1 >= num2 Entonces
		Escribir num1 " Es mayor que " num2
	SiNo
		Escribir num2 " Es mayor que " num1
	Fin Si
FinAlgoritmo
*/

 let num1 = prompt("Escriba dos numeros, el primero:");
 let num2 = prompt("Escriba dos numeros, el segundo:");

 //Usare un if y else para dar una respuesta mas rapida, si el numero 1 es menor la condicion sera falss y reflejara que num2 es el mayor
 if(num1 > num2){
    alert(num1 +" es el numero mayor");
 } else {
    alert(num2+" es el numero mayor");
 }

 //Se puede usar un else if para la condicion falsa, en caso de ser falsa tambien el else se usara para mostrar que los numeros son iguales
 
