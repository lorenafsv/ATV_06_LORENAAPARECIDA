// produtoForm.ts
import { Produto } from './produto';

let produtos: Produto[] = [];

export function adicionarProduto(nome: string, preco: number, quantidade: number) {
    const produto = new Produto(nome, preco, quantidade);
    produtos.push(produto);
    atualizarProdutoTabela();
}

export function atualizarProduto(nome: string, novoPreco: number, novaQuantidade: number) {
    const produto = produtos.find(p => p.nome === nome);
    if (produto) {
        produto.preco = novoPreco;
        produto.quantidadeEstoque = novaQuantidade;
        atualizarProdutoTabela();
    }
}

export function removerProduto(nome: string) {
    produtos = produtos.filter(p => p.nome !== nome);
    atualizarProdutoTabela();
}

function atualizarProdutoTabela() {
    const tabela = document.getElementById('tabelaProdutos')!;
    tabela.innerHTML = '';
    produtos.forEach(produto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.quantidadeEstoque}</td>
            <td><button onclick="removerProduto('${produto.nome}')">Remover</button></td>
        `;
        tabela.appendChild(linha);
    });
}
