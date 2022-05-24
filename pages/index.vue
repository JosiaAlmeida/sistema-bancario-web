<template>
  <v-row justify="center" align="center">
    <CreateUser v-if="step == 0" :handleClick="createUser" />
    <ProfileUser
      v-if="step == 1"
      :name="User.name"
      :agencie="User.agencie"
      :number="Number(User.numberAccount)"
      :sale="Number(User.sale)"
      :opeSacar="operation"
      :opeDepositar="operation"
      :opeExtrato="operation"
      :opeTransfer="operation"
    />
    <SacarSale
      v-if="step == 2 || step == 3"
      :currentStep="step"
      :profile="operation"
      :sacarOrDepositar="sacarOrDepositar"
      :sale="Number(User.sale)"
    />
    <!-- <SnackBars :snackbar="snackbar" :text="text[step - 1]" /> -->
  </v-row>
</template>

<script>
import CreateUser from "~/components/CreateUser.vue";
import ProfileUser from "../components/ProfileUser.vue";
import SnackBars from "~/components/SnackBars.vue";
import { Account } from "@/repository/account";
import SacarSale from "~/components/SacarSale.vue";

export default {
  name: "IndexPage",
  components: { CreateUser, ProfileUser, SnackBars, SacarSale },
  data() {
    return {
      step: 0,
      snackbar: false,
      text: ["Conta criada com sucesso"],
      User: null,
    };
  },
  methods: {
    createUser(name, agencie, numberAccount, sale) {
      this.User = new Account(name, agencie, numberAccount, sale);
      this.step++;
    },
    operation(v) {
      this.step = v;
    },
    sacarOrDepositar(v) {
      if (this.step == 2) {
        this.User.sacar(v);
      } else if (this.step == 3) {
        this.User.depositar(v);
      }
    },
  },
};
</script>
