// script.js

// Funciones de conversión
function integerToRoman(num) {
    const ROMAN_MAP = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    if (!Number.isInteger(num) || num < 1 || num > 3999) {
        throw new Error('Ingrese un número entero entre 1 y 3999.');
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

function romanToInteger(roman) {
    const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    const str = roman.toUpperCase().trim();

    if (!str) throw new Error('Ingrese un número romano.');

    let total = 0;
    for (let i = 0; i < str.length; i++) {
        const current = map[str[i]];
        const next = map[str[i + 1]];

        if (!current) throw new Error('Símbolo romano inválido.');

        if (next && current < next) {
            total += next - current;
            i++;
        } else {
            total += current;
        }
    }
    return total;
}

// Manejadores de eventos
const enteroInput = document.getElementById('entero');
const romanoInput = document.getElementById('romano');
const resultadoRomano = document.getElementById('resultadoRomano');
const resultadoEntero = document.getElementById('resultadoEntero');
const resetBtn = document.getElementById('reset');

document.getElementById('toRoman').addEventListener('click', () => {
    try {
        const num = parseInt(enteroInput.value);
        resultadoRomano.textContent = integerToRoman(num);
    } catch (err) {
        resultadoRomano.textContent = err.message;
    }
});

document.getElementById('toEntero').addEventListener('click', () => {
    try {
        const roman = romanoInput.value;
        resultadoEntero.textContent = romanToInteger(roman);
    } catch (err) {
        resultadoEntero.textContent = err.message;
    }
});

// 🔹 Botón de restablecer
resetBtn.addEventListener('click', () => {
    enteroInput.value = '';
    romanoInput.value = '';
    resultadoRomano.textContent = '';
    resultadoEntero.textContent = '';
    enteroInput.focus(); // opcional, coloca el cursor en el input del número
});
