import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
      super(0,cliente,agencia);  
    }

    sacar(valor) {
      let taxa = 1.2
      return this._sacar(valor, taxa);
  }
   }