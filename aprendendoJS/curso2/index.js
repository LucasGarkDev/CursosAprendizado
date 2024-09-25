class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        // let valor = prompt("Digite o valor que deseja sacar:");
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 111222233309;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.saldo = 0;
contaCorrente1.agencia = 1001;


console.log(cliente1);


