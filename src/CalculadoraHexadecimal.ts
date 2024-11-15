// CalculadoraHexadecimal.ts
import { ICalculadora } from './ICalculadora';

export class CalculadoraHexadecimal implements ICalculadora {
    valor: number = 0;

    Adicao(a: number, b: number): number {
        return a + b;
    }

    Subtracao(a: number, b: number): number {
        return a - b;
    }

    Multiplicacao(a: number, b: number): number {
        return a * b;
    }

    Divisao(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Não é possível dividir por zero');
        }
        return a / b;
    }

    // Convertendo para hexadecimal
    resultadoHexadecimal(resultado: number): string {
        return resultado.toString(16).toUpperCase();
    }
}
