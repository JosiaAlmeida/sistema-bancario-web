<template>
  <v-col cols="12" sm="8" md="6">
    <v-card>
      <v-card-title class="headline"> Transferir saldo </v-card-title>
      <v-card-text>
        <p>Meu Saldo disponivel: {{ Mysale }}</p>
        <v-form>
          <v-text-field
            label="Nome do usuario"
            :counter="10"
            v-model="name"
            required
            clearable
          ></v-text-field>
          <v-text-field
            label="Qual a sua agencia?"
            :counter="10"
            required
            clearable
            v-model="agencie"
          ></v-text-field>
          <v-text-field
            label="Numero de conta"
            :counter="10"
            required
            clearable
            v-model="numberAccount"
          ></v-text-field>
          <v-text-field
            label="Quantia a transferir"
            required
            clearable
            v-model="sale"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          depressed
          color="primary"
          @click="handleClick(name, agencie, numberAccount, sale)"
        >
          Transferir Saldo
        </v-btn>
        <v-btn @click="profile(1)">Perfil</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      numberAccount: 0,
      sale: 0,
      agencie: "",
    };
  },
  props: {
    ["handleClick"]: Function,
    ["profile"]: Function,
    ["Mysale"]: Number,
  },
};
</script>
