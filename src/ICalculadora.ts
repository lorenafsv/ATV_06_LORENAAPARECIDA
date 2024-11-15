// ICalculadora.ts
export interface ICalculadora {
    valor: number;
    Adicao(a: number, b: number): number;
    Subtracao(a: number, b: number): number;
    Multiplicacao(a: number, b: number): number;
    Divisao(a: number, b: number): number;
}
