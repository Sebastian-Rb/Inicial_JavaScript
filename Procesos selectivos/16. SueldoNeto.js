// Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual. 

/*  Requerimientos: Necesitamos calcular el sueldo neto anual de un empleado. Para ello, necesitamos saber el sueldo mensual del empleado. Si el sueldo anual supera los $30,000, se aplicará un impuesto del 15%.
    Entrada: sueldoMensual = "", sueldoAnual = "", impuestoexd = "15", sueldoNeto = ""
    Proceso: sueldoAnual = sueldoMensual * 12, para sacar el sueldoneto se hace lo siguiente: si sueldoAnual > 30000 
             sueldoNeto = sueldoAnual - (impuestoexd * 15 / 100)
    Salida: sueldoNeto
!Pseudocódigo:
Algoritmo SueldoNeto
Definir sueldoMensual, sueldoAnual, sueldont Como Real;
Escribir "Ingrese su sueldo mensual: ";
Leer sueldoMensual;
sueldoAnual <- sueldoMensual * 12;
Si sueldoAnual > 30000 Entonces
	sueldont <- sueldoAnual - (sueldoanual * 15 / 100)
	Escribir "Su sueldo neto anual mas impuestos es: " sueldont
SiNo
	Escribir "Su sueldo neto anual es de: " sueldoanual
FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let sueldoMensual = parseFloat(prompt("Ingrese su sueldo mensual: "))
let sueldoNeto = 0
let sueldoAnual = sueldoMensual * 12
let impuestoexd = 15

if (sueldoAnual > 30000) {
    sueldoNeto = sueldoAnual + (sueldoAnual * impuestoexd / 100)
    console.log("Su sueldo neto anual mas impuestos es: " + sueldoNeto)
} else {
    console.log("Su sueldo neto anual es de: " + sueldoAnual)
}

