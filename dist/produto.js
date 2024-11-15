// produto.ts
export class Produto {
    constructor(nome, preco, quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }
    atualizarEstoque(quantidade) {
        this.quantidadeEstoque += quantidade;
    }
    reduzirEstoque(quantidade) {
        if (this.quantidadeEstoque >= quantidade) {
            this.quantidadeEstoque -= quantidade;
        }
        else {
            throw new Error("Estoque insuficiente");
        }
    }
}
