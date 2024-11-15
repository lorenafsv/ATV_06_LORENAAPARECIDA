export class ItemVenda {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    calcularValorTotal() {
        return this.produto.preco * this.quantidade;
    }
}
