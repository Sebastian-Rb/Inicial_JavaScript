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
