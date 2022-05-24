<template>
  <v-col cols="12" sm="8" md="6">
    <v-card>
      <v-card-title class="headline"> Cria conta bancaria </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Nome do usuario"
            v-model="name"
            clearable
            type="text"
            required
            :counter="10"
            maxlength="10"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Qual a sua agencia?"
            required
            maxlength="4"
            :counter="4"
            type="text"
            v-model="agencie"
            clearable
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            label="Numero de conta"
            clearable
            required
            minlength="10"
            maxlength="14"
            pattern="[0-9]+"
            :counter="14"
            v-model="numberAccount"
            :rules="[rules.required, rules.validateNumber]"
          ></v-text-field>
          <v-text-field
            type="text"
            label="Saldo inicial"
            required
            v-model="sale"
            clearable
            :rules="[rules.required, rules.validateNumber]"
          ></v-text-field>
          <v-btn
            depressed
            color="primary"
            @click="handleClick(name, agencie, numberAccount, sale)"
          >
            Criar conta
          </v-btn>
        </v-form>
      </v-card-text>
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
        validateNumber: this.validateNumberInput,
      },
    };
  },
  methods: {
    validateNumberInput: (value) => {
      const pattern = /^[0-9]+$/;
      return pattern.test(value) || "Não pode conter caracter";
    },
  },
  props: {
    ["handleClick"]: Function,
  },
};
</script>
