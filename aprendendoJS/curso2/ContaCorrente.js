export class ContaCorrente{
    agencia;
    #saldo = 0;
    sacar(valor){
        // let valor = prompt("Digite o valor que deseja sacar:");
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return valor;
        }
        
    }

    depositar(valor){
        if (valor <= 0) {
            return;
        }
        this.#saldo += valor;
    }
}