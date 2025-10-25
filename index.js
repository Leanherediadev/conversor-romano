// index.js
//Conversor de numeros enteros <-> numeros romanos

//Mapa de equivalencias basicas
const ROMAN_MAP = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

//Funcion para convertir entero a romano
function integerToRoman(num) {
    if (!Number.isInteger(num)) {
        throw new TypeError('El número debe ser un entero.');
    }
    if (num < 1 || num > 3999) {
        throw new RangeError('El rango permitido es del 1 al 3999.');
    }

    let result = '';
    for (const [value, symbol] of ROMAN_MAP) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

//Funcion para convertir de romano a entero
function romanToInteger(roman) {
    if (typeof roman !== 'string') {
        throw new TypeError('Debe ingresar un número romano en formato texto.');
    }

    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    const str = roman.toUpperCase().trim();
    
    // validación clave para el test
    if (str.length === 0) {
        throw new TypeError('La cadena no puede estar vacía.');
    }

    let total = 0;

    for (let i= 0; i < str.length; i++) {
        const current = map[str[i]];
        const next = map[str[i+1]];

        if (!current) throw new Error('Símbolo romano inválido.');

        if (next && current < next) {
            total += next - current;
            i++; // saltamos el siguiente
        } else {
            total += current;
        }
    }

    return total;
}

// Exportamos las funciones para usarlas en los tests
module.exports = { integerToRoman, romanToInteger };
