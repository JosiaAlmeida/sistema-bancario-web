<template>
  <v-col sm="12" md="8">
    <v-card>
      <v-card-title> Bem vindo {{ name }} </v-card-title>
      <v-card-text>
        <p>Agencia: {{ agency }}</p>
        <p>Numero de conta: {{ number }}</p>
        <p>Saldo disponivel: {{ sale }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="oWithdraw(2)"> Sacar saldo </v-btn>
        <v-btn @click="oDeposit(3)"> depositar saldo </v-btn>
        <v-btn @click="oTransfer(4)"> Transferir saldo </v-btn>
        <v-btn @click="opeExtrato(5)"> Imprimir extrato </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    ["name"]: String,
    ["number"]: Number,
    ["agency"]: String,
    ["sale"]: Number,
    ["oWithdraw"]: Function,
    ["oDeposit"]: Function,
    ["oTransfer"]: Function,
    ["opeExtrato"]: Function,
  },
};
</script>
