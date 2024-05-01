/** La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente: 
 * Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2. 
 * Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2. 
 * Realice un algoritmo para determinar la ganancia obtenida.  
*/
/* Requerimientos: Necesitamos calcular la ganancia obtenida por un productor de bananos. Para ello, necesitamos saber el tipo de banano, el tamaño del banano y el precio inicial del banano. 
    Entrada: tipoBanano = "", tamañoBanano = "", precioInicial = "", ganancia = ""
    Proceso: Si tipoBanano = "A" y tamañoBanano = 1, precioInicial = precioInicial + 2
             Si tipoBanano = "A" y tamañoBanano = 2, precioInicial = precioInicial + 3
             Si tipoBanano = "B" y tamañoBanano = 1, precioInicial = precioInicial - 3
             Si tipoBanano = "B" y tamañoBanano = 2, precioInicial = precioInicial - 5
             ganancia = precioInicial
    Salida: ganancia
!Pseudocódigo:
Algoritmo Banano
	Definir tipoBanano Como Caracter
	Definir tamañoBanano, precioInicial, ganancia Como Real
	Escribir "Ingrese el tipo de banano (A o B): "
	Leer tipoBanano;
	Escribir "Ingrese el tamaño del banano (1 o 2): "
	Leer tamañoBanano
	Escribir "Ingrese el precio inicial del banano: "
	Leer precioInicial

	Si tipoBanano = "A" y tamañoBanano = 1 Entonces
		precioInicial <- precioInicial + 2
	SiNo
		Si tipoBanano = "A" y tamañoBanano = 2 Entonces
			precioInicial <- precioInicial + 3
		SiNo
			Si tipoBanano = "B" y tamañoBanano = 1 Entonces
				precioInicial <- precioInicial - 3
			SiNo
				Si tipoBanano = "B" y tamañoBanano = 2 Entonces
					precioInicial <- precioInicial - 5
				FinSi
			FinSi
		FinSi
	FinSi
	ganancia <- precioInicial
	Escribir "La ganancia obtenida es de: " ganancia
FinAlgoritmo
*/

let prompt = require('prompt-sync')()

let tipoBanano = prompt("Ingrese el tipo de banano (A o B): ")
let tamañoBanano = parseInt(prompt("Ingrese el tamaño del banano (1 o 2): "))
let precioInicial = parseFloat(prompt("Ingrese el precio inicial del banano: "))
let ganancia = ""

if (tipoBanano == 'A') {
    if (tamañoBanano == 1) {
        precioInicial += 2;
    } else if (tamañoBanano == 2) {
        precioInicial += 3;
    } else {
        console.log("Tamaño ingresado inválido.");
    }
} else if (tipoBanano == 'B') {
    if (tamañoBanano == 1) {
        precioInicial -= 3;
    } else if (tamañoBanano == 2) {
        precioInicial -= 5;
    } else {
        console.log("Tamaño ingresado inválido.");
    }
} else {
    console.log("Tipo ingresado inválido.");
}

ganancia = precioInicial;
if (ganancia >= 0) {
    console.log("La ganancia obtenida es de "+ganancia)
} else {
    console.log("La pérdida obtenida es de "+ ganancia)
}
