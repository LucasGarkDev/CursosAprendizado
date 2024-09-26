const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 111222233309;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;

contaCorrente1.depositar(100);
contaCorrente1.depositar(200);
contaCorrente1.depositar(-1);
const valorSacado = contaCorrente1.sacar(50);



