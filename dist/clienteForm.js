// clientForm.ts
import { Cliente } from './cliente';
let clientes = [];
export function adicionarCliente(nome, cpf, email) {
    const cliente = new Cliente(nome, cpf, email);
    clientes.push(cliente);
    atualizarClienteTabela();
}
export function atualizarCliente(cpf, novoNome, novoEmail) {
    const cliente = clientes.find(c => c.cpf === cpf);
    if (cliente) {
        cliente.nome = novoNome;
        cliente.email = novoEmail;
        atualizarClienteTabela();
    }
}
export function removerCliente(cpf) {
    clientes = clientes.filter(c => c.cpf !== cpf);
    atualizarClienteTabela();
}
function atualizarClienteTabela() {
    const tabela = document.getElementById('tabelaClientes');
    tabela.innerHTML = '';
    clientes.forEach(cliente => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.email}</td>
            <td><button onclick="removerCliente('${cliente.cpf}')">Remover</button></td>
        `;
        tabela.appendChild(linha);
    });
}
