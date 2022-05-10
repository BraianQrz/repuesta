let tablero = [] /* Creamos un array que simula un tablero */


let medidas = Number(prompt("Ingrese las medida del tablero EJ:'10' (hace referencia a un tablero 10x10 casillas)")) /* Solicitamos al usuario que ingrese las medidas del tablero */
while (isNaN(medidas) != false) {
    try {
        throw new Error("El usuario no ha ingresado un numero")
    } catch (err) {
        alert("Ingrese un valor válido")
        console.error("El tipo de dato ingresado no es correcto", err)
    }
    medidas = prompt("Ingrese las medida del tablero EJ:'100' (hace referencia a un tablero 100x100 casillas)")
} /** Verificamos que el valor ingresdo por el usuario sea de tipo Number */


crearTabla(medidas) /* Ejecutamos la funcion para crear el tablero a partir de la dimension ingresda por el usuario */


/**
 * 
 * @param {Number} size Solicita un parametro de tipo number que será utilizado como dimension de ancho y alto del tablero
 */
function crearTabla(size) {
    for (filas = 0; filas < size; filas++) {
        tablero.push(crearFilas(size))
    }
}


/**
 * 
 * @param {Number} casillero 
 * @returns Array: devuelve un array con la cantidad de elementos eqivalente al numero de casillas
 */
function crearFilas(casillero) {
    let fila = []
    for (c = 0; c < casillero; c++) {
        if (tablero.length % 2 == 0) {
            if (c % 2 == 0) {
                fila.push("rojo")
            } else {
                fila.push("azul")
            }
        } else {
            if (c % 2 == 0) {
                fila.push("azul")
            } else {
                fila.push("rojo")
            }
        }
    }
    return fila
}

console.log(tablero)

