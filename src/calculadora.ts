// calculadora.ts
import { CalculadoraDecimal } from './CalculadoraDecimal';
import { CalculadoraHexadecimal } from './CalculadoraHexadecimal';

// Inicializando as instâncias das calculadoras
const calculadoraDecimal = new CalculadoraDecimal();
const calculadoraHexadecimal = new CalculadoraHexadecimal();

// Função para alternar entre as calculadoras
function mostrarCalculadora(calculadora: string) {
    const calcDecimal = document.getElementById('calculadoraDecimal');
    const calcHexadecimal = document.getElementById('calculadoraHexadecimal');

    if (calculadora === 'decimal') {
        calcDecimal!.style.display = 'block';
        calcHexadecimal!.style.display = 'none';
    } else if (calculadora === 'hexadecimal') {
        calcDecimal!.style.display = 'none';
        calcHexadecimal!.style.display = 'block';
    }
}

// Ações dos botões para a calculadora decimal
document.getElementById('calculadoraDecimalBtn')!.addEventListener('click', () => mostrarCalculadora('decimal'));
document.getElementById('calculadoraHexadecimalBtn')!.addEventListener('click', () => mostrarCalculadora('hexadecimal'));

document.getElementById('adicionarDecimal')!.addEventListener('click', () => {
    const input1 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal1')).value);
    const input2 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal2')).value);
    const resultado = calculadoraDecimal.Adicao(input1, input2);
    (<HTMLParagraphElement>document.getElementById('resultadoDecimal')).innerText = `Resultado: ${resultado}`;
});

document.getElementById('subtrairDecimal')!.addEventListener('click', () => {
    const input1 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal1')).value);
    const input2 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal2')).value);
    const resultado = calculadoraDecimal.Subtracao(input1, input2);
    (<HTMLParagraphElement>document.getElementById('resultadoDecimal')).innerText = `Resultado: ${resultado}`;
});

document.getElementById('multiplicarDecimal')!.addEventListener('click', () => {
    const input1 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal1')).value);
    const input2 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal2')).value);
    const resultado = calculadoraDecimal.Multiplicacao(input1, input2);
    (<HTMLParagraphElement>document.getElementById('resultadoDecimal')).innerText = `Resultado: ${resultado}`;
});

document.getElementById('dividirDecimal')!.addEventListener('click', () => {
    const input1 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal1')).value);
    const input2 = parseFloat((<HTMLInputElement>document.getElementById('inputDecimal2')).value);
    try {
        const resultado = calculadoraDecimal.Divisao(input1, input2);
        (<HTMLParagraphElement>document.getElementById('resultadoDecimal')).innerText = `Resultado: ${resultado}`;
    } catch (error: any) {
        (<HTMLParagraphElement>document.getElementById('resultadoDecimal')).innerText = `Erro: ${error.message}`;
    }
});

// Ações dos botões para a calculadora hexadecimal
document.getElementById('adicionarHex')!.addEventListener('click', () => {
    const input1 = parseInt((<HTMLInputElement>document.getElementById('inputHex1')).value, 10);
    const input2 = parseInt((<HTMLInputElement>document.getElementById('inputHex2')).value, 10);
    const resultado = calculadoraHexadecimal.Adicao(input1, input2);
    const resultadoHex = calculadoraHexadecimal.resultadoHexadecimal(resultado);
    (<HTMLParagraphElement>document.getElementById('resultadoHex')).innerText = `Resultado: ${resultadoHex}`;
});

document.getElementById('subtrairHex')!.addEventListener('click', () => {
    const input1 = parseInt((<HTMLInputElement>document.getElementById('inputHex1')).value, 10);
    const input2 = parseInt((<HTMLInputElement>document.getElementById('inputHex2')).value, 10);
    const resultado = calculadoraHexadecimal.Subtracao(input1, input2);
    const resultadoHex = calculadoraHexadecimal.resultadoHexadecimal(resultado);
    (<HTMLParagraphElement>document.getElementById('resultadoHex')).innerText = `Resultado: ${resultadoHex}`;
});

document.getElementById('multiplicarHex')!.addEventListener('click', () => {
    const input1 = parseInt((<HTMLInputElement>document.getElementById('inputHex1')).value, 10);
    const input2 = parseInt((<HTMLInputElement>document.getElementById('inputHex2')).value, 10);
    const resultado = calculadoraHexadecimal.Multiplicacao(input1, input2);
    const resultadoHex = calculadoraHexadecimal.resultadoHexadecimal(resultado);
    (<HTMLParagraphElement>document.getElementById('resultadoHex')).innerText = `Resultado: ${resultadoHex}`;
});

document.getElementById('dividirHex')!.addEventListener('click', () => {
    const input1 = parseInt((<HTMLInputElement>document.getElementById('inputHex1')).value, 10);
    const input2 = parseInt((<HTMLInputElement>document.getElementById('inputHex2')).value, 10);
    try {
        const resultado = calculadoraHexadecimal.Divisao(input1, input2);
        const resultadoHex = calculadoraHexadecimal.resultadoHexadecimal(resultado);
        (<HTMLParagraphElement>document.getElementById('resultadoHex')).innerText = `Resultado: ${resultadoHex}`;
    } catch (error: any) {
        (<HTMLParagraphElement>document.getElementById('resultadoHex')).innerText = `Erro: ${error.message}`;
    }
});
