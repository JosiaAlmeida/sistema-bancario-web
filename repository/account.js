class Account {
  name
  numberAccount
  sale
  agency
  constructor(name, agency, numberAccount, sale) {
    this.name = name
    this.agency = agency
    this.numberAccount = numberAccount
    this.sale = sale
  }

  withdraw(value) {
    if (this.sale >= value) {
      this.sale -= value
      return true
    }
    return false
  }
  deposit(value) {
    this.sale = Number(this.sale) + Number(value)
    return true
  }
  transfer(value, Account) {
    if (this.withdraw(value)) {
      Account.deposit(value)
      return true
    }
    return false
  }
}
module.exports = { Account }
