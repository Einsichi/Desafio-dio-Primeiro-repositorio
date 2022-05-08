class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;  //this se refere sempre ao objeto conta bancaria
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;  //sempre que tiver um setter ou um get, para que ambas as função tenham o nome saldo mas não as propriedades
    }

  

    set saldo(valor){
        this._saldo = valor; 
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }

    depositar(valor){

        this._saldo = this._saldo + valor; 
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{  //extends é para herda as propriedades da classe pai

    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
        
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

   
}

class ContaPoupanca extends ContaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
       
        
    }
}

class ContaUniversitaria extends ContaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
       
        
    }

    sacar(valor){
        if(valor > 500){

            return 'Operação negada!';
        }
        
        this._saldo = this._saldo - valor;
    }
}

