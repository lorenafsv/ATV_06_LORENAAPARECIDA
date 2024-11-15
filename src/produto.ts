// produto.ts
export class Produto {
    nome: string;
    preco: number;
    quantidadeEstoque: number;

    constructor(nome: string, preco: number, quantidadeEstoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    atualizarEstoque(quantidade: number): void {
        this.quantidadeEstoque += quantidade;
    }

    reduzirEstoque(quantidade: number): void {
        if (this.quantidadeEstoque >= quantidade) {
            this.quantidadeEstoque -= quantidade;
        } else {
            throw new Error("Estoque insuficiente");
        }
    }
}
