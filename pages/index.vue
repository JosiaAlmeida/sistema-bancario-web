<template>
  <v-row justify="center" align="center">
    <CreateUser v-if="step == 0" :handleClick="nextStep" />
    <ProfileUser v-if="step == 1" />
    <SnackBars :snackbar="snackbar" :text="text[step - 1]" />
  </v-row>
</template>

<script>
import CreateUser from "~/components/CreateUser.vue";
import ProfileUser from "../components/ProfileUser.vue";
import SnackBars from "~/components/SnackBars.vue";
export default {
  name: "IndexPage",
  components: { CreateUser, ProfileUser, SnackBars },
  data() {
    return {
      step: 0,
      snackbar: false,
      text: ["Conta criada com sucesso"],
    };
  },
  methods: {
    nextStep() {
      this.step++;
      this.snackbar = true;
    },
  },
};
</script>
