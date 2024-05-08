/**
 * Calculadora factorial
Implementar una función para calcular el factorial de un número mediante recursividad.
Asegúrese de que maneje casos extremos: números negativos o entradas no enteras.
 */

function factorial(a, b){
    if(b < 1)
    if ((b==0) || b==1)
        return b;
    else 
    return a(b-1)*b
}

module.exports= factorial;