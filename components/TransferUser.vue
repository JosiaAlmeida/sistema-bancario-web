<template>
  <v-col cols="12" sm="8" md="6">
    <v-card>
      <v-card-title class="headline"> Transferir saldo </v-card-title>
      <v-card-text>
        <p>Meu Saldo disponivel: {{ Mysale }}</p>
        <v-form>
          <v-text-field
            label="Nome do usuario"
            v-model="name"
            required
            clearable
            :counter="10"
            maxlength="10"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Qual a sua agencia?"
            required
            clearable
            maxlength="4"
            :counter="4"
            v-model="agencie"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Numero de conta"
            required
            clearable
            maxlength="14"
            :counter="14"
            v-model="numberAccount"
            :rules="[rules.required, rules.validateNumber]"
          ></v-text-field>
          <v-text-field
            label="Quantia a transferir"
            required
            clearable
            v-model="sale"
            :rules="[rules.required, rules.validateNumber]"
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
      numberAccount: null,
      sale: null,
      agencie: "",
      rules: {
        required: (value) => !!value || "Required.",
        validateNumber: (value) => {
          const pattern = /^[0-9]+$/;
          return pattern.test(value) || "Não pode conter caracter";
        },
      },
    };
  },
  props: {
    ["handleClick"]: Function,
    ["profile"]: Function,
    ["Mysale"]: Number,
  },
};
</script>
