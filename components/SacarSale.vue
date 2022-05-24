<template>
  <v-col md="8" sm="12">
    <v-card>
      <v-card-text>
        <p>Saldo de conta: {{ sale }}</p>
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-form>
              <v-text-field
                v-model="value"
                :label="currentStep == 2 ? 'Sacar' : 'Depositar'"
                clearable
              ></v-text-field>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="withdrawOrDeposit(value)">{{
          currentStep == 2 ? "Sacar" : "Depositar"
        }}</v-btn>
        <v-btn @click="profile(1)">Perfil</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: {
    ["sale"]: Number,
    ["currentStep"]: Number,
    ["withdrawOrDeposit"]: Function,
    ["profile"]: Function,
  },
  watch: {
    sale: {
      handler() {
        this.value = 0;
      },
    },
  },
};
</script>
