// itemVenda.ts
import { Produto } from './produto';

export class ItemVenda {
    produto: Produto;
    quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    calcularValorTotal(): number {
        return this.produto.preco * this.quantidade;
    }
}
