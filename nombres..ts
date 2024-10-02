import * as rs from "readline-sync"
const names: String[] = ["Lucia", "Bruno", "jorge", "Roberto", "pepe"];

const nametofind: string = rs.question("ingrese nombre a buscar:");
let resultado: string = "no encontrado";
for (let i = 0; i < names.length; i++) {
    if (names[i].toLocaleLowerCase() === nametofind.toLocaleLowerCase()) {
        resultado = "encontrado!";
    }
}
console.log(resultado);