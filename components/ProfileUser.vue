<template>
  <v-col sm="12" md="8">
    <v-card>
      <v-card-title> Bem vindo {{ name }} </v-card-title>
      <v-card-text>
        <p>Agencia: {{ agencie }}</p>
        <p>Numero de conta: {{ number }}</p>
        <p>Saldo disponivel: {{ sale }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="opeSacar(2)"> Sacar saldo </v-btn>
        <v-btn @click="opeDepositar(3)"> depositar saldo </v-btn>
        <v-btn @click="opeTransfer(4)"> Transferir saldo </v-btn>
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
    ["agencie"]: String,
    ["sale"]: Number,
    ["opeSacar"]: Function,
    ["opeDepositar"]: Function,
    ["opeTransfer"]: Function,
    ["opeExtrato"]: Function,
  },
};
</script>
