// clientForm.ts
import { Cliente } from './cliente';

let clientes: Cliente[] = [];

export function adicionarCliente(nome: string, cpf: string, email: string) {
    const cliente = new Cliente(nome, cpf, email);
    clientes.push(cliente);
    atualizarClienteTabela();
}

export function atualizarCliente(cpf: string, novoNome: string, novoEmail: string) {
    const cliente = clientes.find(c => c.cpf === cpf);
    if (cliente) {
        cliente.nome = novoNome;
        cliente.email = novoEmail;
        atualizarClienteTabela();
    }
}

export function removerCliente(cpf: string) {
    clientes = clientes.filter(c => c.cpf !== cpf);
    atualizarClienteTabela();
}

function atualizarClienteTabela() {
    const tabela = document.getElementById('tabelaClientes')!;
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
