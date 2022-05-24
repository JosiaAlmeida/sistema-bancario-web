<template>
  <v-col cols="12" sm="8" md="6">
    <v-card>
      <v-card-title class="headline"> Cria conta bancaria </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Nome do usuario"
            :counter="10"
            v-model="name"
            clearable
            required
          ></v-text-field>
          <v-text-field
            label="Qual a sua agencia?"
            :counter="10"
            required
            v-model="agencie"
            clearable
          ></v-text-field>
          <v-text-field
            label="Numero de conta"
            :counter="10"
            clearable
            required
            v-model="numberAccount"
          ></v-text-field>
          <v-text-field
            label="Saldo inicial"
            :counter="10"
            required
            v-model="sale"
            clearable
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          depressed
          color="primary"
          @click="handleClick(name, agencie, numberAccount, sale)"
        >
          Criar conta
        </v-btn>
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
  },
};
</script>
