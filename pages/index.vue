<template>
  <v-row justify="center" align="center">
    <CreateUser v-if="step == 0" :handleClick="createUser" />
    <ProfileUser
      v-if="step == 1"
      :name="User.name"
      :agency="User.agency"
      :number="Number(User.numberAccount)"
      :sale="Number(User.sale)"
      :oWithdraw="operation"
      :oDeposit="operation"
      :opeExtrato="operation"
      :oTransfer="operation"
    />
    <SacarSale
      v-if="step == 2 || step == 3"
      :currentStep="step"
      :profile="operation"
      :withdrawOrDeposit="withdrawOrDeposit"
      :sale="Number(User.sale)"
    />
    <TransferUser
      v-if="step == 4"
      :Mysale="Number(User.sale)"
      :handleClick="transferSaleToUser"
      :profile="operation"
    />
    <BankExtract
      v-if="step == 5"
      :User="User"
      :profile="operation"
      :totalTransfer="UsersTransfer.length"
    />
    <SnackBars :snackbar="snackBar" :text="textInfo" :close="close" />
  </v-row>
</template>

<script>
import { Account } from "@/repository/account";
const pattern = /^[0-9]+/;
const patternString = /^[0-9]+[a-zA-Z]+/g;
const patternStringNumber = /^[a-zA-Z]+[0-9]+/g;
const patternStringNumberString = /^[a-zA-Z]+[0-9]+[a-zA-Z]+/g;
const patternStringTwoNumber = /^[0-9]+[a-zA-Z]+[0-9]+/g;
export default {
  name: "IndexPage",
  data() {
    return {
      step: 0,
      snackbar: false,
      text: ["Conta criada com sucesso"],
      User: null,
      UsersTransfer: [],
      snackBar: false,
      textInfo: "",
    };
  },
  methods: {
    createUser(name, agency, numberAccount, sale) {
      this.User = new Account(name, agency, numberAccount, sale);
      if (
        name &&
        agency &&
        numberAccount &&
        pattern.test(numberAccount) &&
        !patternStringNumberString.test(numberAccount) &&
        !patternString.test(numberAccount) &&
        !patternStringNumber.test(numberAccount) &&
        !patternStringTwoNumber.test(numberAccount) &&
        sale &&
        pattern.test(sale) &&
        !patternStringNumberString.test(sale) &&
        !patternString.test(sale) &&
        !patternStringNumber.test(sale) &&
        !patternStringTwoNumber.test(sale)
      ) {
        this.close(true, "Sua conta foi criada");
        this.step++;
      } else this.close(true, "Não é possivel criar uma conta");
    },
    operation(value) {
      this.step = value;
    },
    withdrawOrDeposit(value) {
      if (this.step == 2) {
        this.User.withdraw(value)
          ? this.close(true, "Operação realizada com sucesso")
          : this.close(true, "Operação falhou");
      } else if (this.step == 3) {
        this.User.deposit(value)
          ? this.close(true, "Operação realizada com sucesso")
          : this.close(true, "Operação falhou");
      }
    },
    transferSaleToUser(name, agency, numberAccount, sale) {
      if (
        name &&
        agency &&
        numberAccount &&
        pattern.test(numberAccount) &&
        !patternStringNumberString.test(numberAccount) &&
        !patternString.test(numberAccount) &&
        !patternStringNumber.test(numberAccount) &&
        !patternStringTwoNumber.test(numberAccount) &&
        sale &&
        pattern.test(sale) &&
        !patternStringNumberString.test(sale) &&
        !patternString.test(sale) &&
        !patternStringNumber.test(sale) &&
        !patternStringTwoNumber.test(sale)
      ) {
        this.UsersTransfer.push(new Account(name, agency, numberAccount, 0));
        this.User.transfer(
          sale,
          this.UsersTransfer[this.UsersTransfer.length - 1]
        )
          ? this.close(true, "Operação realizada com sucesso")
          : this.close(true, "Operação falhou");
      } else this.close(true, "Operação falhou");
    },
    close(value, text) {
      this.snackBar = value;
      this.textInfo = text;
    },
  },
  beforeUpdate() {
    setTimeout(() => {
      this.snackBar = false;
    }, 4000);
  },
};
</script>
