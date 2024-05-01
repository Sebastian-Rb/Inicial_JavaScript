/*? “Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes: 
El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00. 
Para más de 200 personas el costo por platillo es de $10.00. 
Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, 
considerando que al total hay que agregarle el 15% del iva 
*/ 
/*  Requerimientos: Numero de personas, Costo por platillo, IVA = 15%, condicionales
    Entradas: numpersonas = "", costoxporsona = "" (proceso), iva = 15% (proceso), costototal = "" (salida)
    Proceso: Se requiere multiplicar el costo por persona por la cantidad de personas asi se obtiene el presupuesto, para conocer este dato es necesario condicional para que el costo sea dado y calculado al final
    Salida: costototal
!pseudocodigo
Algoritmo BuffetCosto
    Definir numpersonas, costoxporsona, iva, costototal como Entero
    iva = 15
    Escribir "Ingrese el numero de personas: "
    Leer numpersonas
    Si numpersonas <= 100 Entonces
        costoxporpersona = 20
    Sino
        Si numpersonas > 100 y numpersonas <= 200 Entonces
            costoxporpersona = 15
        Sino
            costoxporpersona = 10
        FinSi
    FinSi
    costototal = numpersonas * costoxporpersona
    iva = costototal * 15 / 100
    costototal = costototal + iva
    Escribir "El presupuesto total es: ", costototal
*/
let prompt = require('prompt-sync')()

let numpersonas = parseInt(prompt("Ingrese el numero de personas: "))
let costoxporpersona = ""
let iva = 15
let costototal = 0

if (numpersonas <= 100) {
    costoxporpersona = 20
} else {
    if (numpersonas > 100 && numpersonas <= 200) {
        costoxporpersona = 15
    } else {
        costoxporpersona = 10
    }
}

costototal = numpersonas * costoxporpersona
iva = costototal * 15 / 100
costototal = costototal + iva
console.log("El presupuesto total es: ", costototal)
