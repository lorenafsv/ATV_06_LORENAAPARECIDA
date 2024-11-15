// calculadora.ts
import { CalculadoraDecimal } from './CalculadoraDecimal';
import { CalculadoraHexadecimal } from './CalculadoraHexadecimal';
// Referências aos elementos HTML
const calculadoraDecimalBtn = document.getElementById("calculadoraDecimalBtn");
const calculadoraHexadecimalBtn = document.getElementById("calculadoraHexadecimalBtn");
const inputDecimal1 = document.getElementById("inputDecimal1");
const inputDecimal2 = document.getElementById("inputDecimal2");
const resultadoDecimal = document.getElementById("resultadoDecimal");
const inputHex1 = document.getElementById("inputHex1");
const inputHex2 = document.getElementById("inputHex2");
const resultadoHex = document.getElementById("resultadoHex");
// Instância das calculadoras
let calculadoraDecimal;
let calculadoraHexadecimal;
calculadoraDecimalBtn.addEventListener("click", () => {
    document.getElementById("calculadoraDecimal").style.display = "block";
    document.getElementById("calculadoraHexadecimal").style.display = "none";
    calculadoraDecimal = new CalculadoraDecimal(0); // Inicializa a calculadora decimal
});
calculadoraHexadecimalBtn.addEventListener("click", () => {
    document.getElementById("calculadoraDecimal").style.display = "none";
    document.getElementById("calculadoraHexadecimal").style.display = "block";
    calculadoraHexadecimal = new CalculadoraHexadecimal(0); // Inicializa a calculadora hexadecimal
});
// Funções para operações com a calculadora decimal
document.getElementById("adicionarDecimal").addEventListener("click", () => {
    const a = parseFloat(inputDecimal1.value);
    const b = parseFloat(inputDecimal2.value);
    const resultado = calculadoraDecimal.Adicao(a, b);
    resultadoDecimal.innerHTML = `Resultado: ${resultado}`;
});
document.getElementById("subtrairDecimal").addEventListener("click", () => {
    const a = parseFloat(inputDecimal1.value);
    const b = parseFloat(inputDecimal2.value);
    const resultado = calculadoraDecimal.Subtracao(a, b);
    resultadoDecimal.innerHTML = `Resultado: ${resultado}`;
});
document.getElementById("multiplicarDecimal").addEventListener("click", () => {
    const a = parseFloat(inputDecimal1.value);
    const b = parseFloat(inputDecimal2.value);
    const resultado = calculadoraDecimal.Multiplicacao(a, b);
    resultadoDecimal.innerHTML = `Resultado: ${resultado}`;
});
document.getElementById("dividirDecimal").addEventListener("click", () => {
    const a = parseFloat(inputDecimal1.value);
    const b = parseFloat(inputDecimal2.value);
    try {
        const resultado = calculadoraDecimal.Divisao(a, b);
        resultadoDecimal.innerHTML = `Resultado: ${resultado}`;
    }
    catch (error) {
        resultadoDecimal.innerHTML = `Erro: ${error.message}`;
    }
});
// Funções para operações com a calculadora hexadecimal
document.getElementById("adicionarHex").addEventListener("click", () => {
    const a = parseInt(inputHex1.value, 16);
    const b = parseInt(inputHex2.value, 16);
    const resultado = calculadoraHexadecimal.Adicao(a, b);
    resultadoHex.innerHTML = `Resultado: ${resultado.toString(16).toUpperCase()}`;
});
document.getElementById("subtrairHex").addEventListener("click", () => {
    const a = parseInt(inputHex1.value, 16);
    const b = parseInt(inputHex2.value, 16);
    const resultado = calculadoraHexadecimal.Subtracao(a, b);
    resultadoHex.innerHTML = `Resultado: ${resultado.toString(16).toUpperCase()}`;
});
document.getElementById("multiplicarHex").addEventListener("click", () => {
    const a = parseInt(inputHex1.value, 16);
    const b = parseInt(inputHex2.value, 16);
    const resultado = calculadoraHexadecimal.Multiplicacao(a, b);
    resultadoHex.innerHTML = `Resultado: ${resultado.toString(16).toUpperCase()}`;
});
document.getElementById("dividirHex").addEventListener("click", () => {
    const a = parseInt(inputHex1.value, 16);
    const b = parseInt(inputHex2.value, 16);
    try {
        const resultado = calculadoraHexadecimal.Divisao(a, b);
        resultadoHex.innerHTML = `Resultado: ${resultado.toString(16).toUpperCase()}`;
    }
    catch (error) {
        resultadoHex.innerHTML = `Erro: ${error.message}`;
    }
});
