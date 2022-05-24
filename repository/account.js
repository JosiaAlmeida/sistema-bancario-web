class Account {
  name
  numberAccount
  sale
  agencie
  constructor(name, agencie, numberAccount, sale) {
    this.name = name
    this.agencie = agencie
    this.numberAccount = numberAccount
    this.sale = sale
  }

  sacar(value) {
    if (this.sale >= value)
      this.sale -= value
  }
  depositar(value) {
    this.sale = Number(this.sale) + Number(value)
  }
  transferir(value, Account) {
    this.sale -= value
    Account.depositar(value)
  }
  ImprimirExtracto() {
    return "*******EXTRATO***********\nAgencia: " + this.agencie + "\nNumero: " + this.numberAccount + "\nSaldo: " + this.sale
  }
}
module.exports = { Account }
