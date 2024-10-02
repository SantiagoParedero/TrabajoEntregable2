import * as rs from "readline-sync";

let longitud: number = rs.questionInt("ingrese la dimension del arreglo: ");
let arreglo: number[] = new Array(longitud);

for (let i: number = 0; i < longitud; i++) {
    arreglo[i] = rs.questionInt("ingrese numero para el arreglo: ")
}

for (let i: number = longitud - 1; i >= 0; i--) {
    console.log(arreglo[i]);
}