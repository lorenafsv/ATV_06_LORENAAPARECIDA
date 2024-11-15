export class CalculadoraHexadecimal {
    constructor() {
        this.valor = 0;
    }
    Adicao(a, b) {
        return a + b;
    }
    Subtracao(a, b) {
        return a - b;
    }
    Multiplicacao(a, b) {
        return a * b;
    }
    Divisao(a, b) {
        if (b === 0) {
            throw new Error('Não é possível dividir por zero');
        }
        return a / b;
    }
    // Convertendo para hexadecimal
    resultadoHexadecimal(resultado) {
        return resultado.toString(16).toUpperCase();
    }
}