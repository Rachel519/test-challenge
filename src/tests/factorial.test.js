/***
 * Calculadora factorial
Implementar una función para calcular el factorial de un número mediante recursividad.
Asegúrese de que maneje casos extremos: números negativos o entradas no enteras.
 */

const funcion = require("../factorial")

test ("Probando factorial",()=>{
   expect(funcion(2,3)).toBe(8);
});