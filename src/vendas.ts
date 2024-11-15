// vendas.ts
import { ItemVenda } from './itemVenda';
import { Cliente } from './cliente';
import { Produto } from './produto';

let vendas: { cliente: Cliente, itens: ItemVenda[] }[] = [];

export function realizarVenda(cliente: Cliente, itens: ItemVenda[]) {
    vendas.push({ cliente, itens });
    itens.forEach(item => item.produto.reduzirEstoque(item.quantidade));
    exibirVendas();
}

function exibirVendas() {
    const tabela = document.getElementById('tabelaVendas')!;
    tabela.innerHTML = '';
    vendas.forEach(venda => {
        let totalVenda = 0;
        venda.itens.forEach(item => {
            totalVenda += item.calcularValorTotal();
        });
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${venda.cliente.nome}</td>
            <td>${totalVenda}</td>
        `;
        tabela.appendChild(linha);
    });
}
