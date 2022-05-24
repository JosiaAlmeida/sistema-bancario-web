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
    if (this.sale >= value) {
      this.sale -= value
      return true
    }
    return false
  }
  depositar(value) {
    this.sale = Number(this.sale) + Number(value)
    return true
  }
  transferir(value, Account) {
    if (this.sacar(value)) {
      Account.depositar(value)
      return true
    }
    return false
  }
}
module.exports = { Account }
