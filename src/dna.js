/**
 * Validador de cadenas de ADN
Cree una función para validar cadenas de ADN como estructura de ADN canónica (p. ej., 'CTAGGGTA').
Permitir sólo bases de ADN canónicas ('C', 'T', 'A', 'G').
La función debe distinguir entre mayúsculas y minúsculas. Sólo se aceptan bases en mayúsculas.
Devuelve una cadena vacía para entradas no válidas o vacías.
Devuelve verdadero si la cadena es una secuencia de ADN válida.
isValidDNA("CTAG"); // should return true
isValidDNA("CTXG"); // should return false due to 'X'
isValidDNA("ctag"); // should return false due to lowercase
isValidDNA(""); // should return false for empty string
 */
const Base = "CTAGGGTA"
function getADNBase (Base){
    if (Base === "C" || Base === "T" || Base === "A" || Base === "G"){
        return true;
    }else{
        return false;
    }
}
function getADNLow(Base){
    return Base.find((Base)=> Base.toUpperCase===Base)
}
function getADNVacio(Base){
    if (Base !== ""){
        return true;
    }else{
        return false;
    }
}

function ValidateADN(Base){
    if (getADNVacio(Base) && getADNBase(Base)&&getADNLow(Base)){
        return true;
    }else{
        return false;
    }
} 

module.exports = {getADNBase, getADNLow, getADNVacio};
module.exports = Base;