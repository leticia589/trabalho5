const deposito =
  function saca(titular ,valor) {
    if(this.saldo >= valor) {
        this.saldo -= valor;
        return true;
    }
    return false;
};

function transefere(valor, conta , titular) {
    if(this.saldo >= valor) {
        this.saca(valor);    
        destino.deposita(valor);
        return true; 
    }
    return false;

};

function depositar(titular, valor)
{
    saldo += valor;
    System.out.println("Depositado: " + valor);
    System.out.println("Novo saldo: " + saldo + "\n");
}
function  exibeMenu(){
        
    System.out.println("\t Escolha a opção desejada");

    System.out.println("1 - Sacar");
    System.out.println("2- tranferir");
    System.out.println("3- depositar");
    System.out.println("4 - Sair\n");
    System.out.print("Opção: ");
}
function   escolheOpcao(int, opcao){
    valor;
    
    switch( opcao ){
        case 1:    
                extrato();
                break;
        case 2: 
                if(saques<3){
                    System.out.print("Quanto deseja sacar: ");
                    valor = entrada.nextDouble();
                    sacar(valor);
                } else{
                    System.out.println("Limite de saques diários atingidos.\n");
                }
                break;
                
        case 3:
                System.out.print("Quanto deseja depositar: ");
                valor = entrada.nextDouble();
                depositar(valor);
                break;
                
        case 4: 
                System.out.println("Sistema encerrado.");
                break;
                
        default:
                System.out.println("Opção inválida");
    }
} 
module.exports = deposito;