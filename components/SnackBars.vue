<template>
  <v-snackbar :value="snackbar">
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    ["text"]: String,
    ["snackbar"]: Boolean,
    ["close"]: Function,
  },
};
</script>
