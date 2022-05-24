<template>
  <v-col md="8" sm="12">
    <v-card>
      <v-card-title>Extrato Bancario</v-card-title>
      <v-card-text>
        <p>Nome *******{{ User.name }}**********</p>
        <p>Conta **********{{ User.numberAccount }}**********</p>
        <p>
          Total de transferencia feitas: **********{{ totalTransfer }}**********
        </p>
        <p>Saldo Disponivel: **********{{ User.sale }}**********</p>
        <p>Montante total Transferido: {{ MoveTotal }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="profile(1)">Perfil</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    ["User"]: Object,
    ["totalTransfer"]: Number,
    ["profile"]: Function,
    ["MoveTotal"]: Number,
  },
};
</script>
