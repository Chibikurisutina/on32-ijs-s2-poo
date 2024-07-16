import { CadastroPessoas } from "./interface/cadastro";

class novoCliente implements CadastroPessoas {
    cpf: number;
    nome: string;
    dataNascimento: Date;
    endereco: string;
    telefone: number;
    valorRenda: number;

    constructor (cpf: number, nome: string, dataNascimento: Date, endereco: string, telefone: number, valorRenda: number){
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefone = telefone;
        this.valorRenda = valorRenda;
    }

    cadastrarCliente(): string{
        return `CPF: ${this.cpf}, NOME COMPLETO: ${this.nome}, DATA DE NASCIMENTO: ${this.dataNascimento.toLocaleDateString("pt-br")}, ENDEREÇO: ${this.endereco}, TELEFONE: ${this.telefone}, VALOR DA RENDA: ${this.valorRenda} ` 
    }
}

const Cliente = new novoCliente(32135435845, 'Ororo Munroe', new Date(10,5,1975), 'Rua Cairo, 616', 51912345678, 4275)
console.log(Cliente.cadastrarCliente())
