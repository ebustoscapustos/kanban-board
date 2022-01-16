<template>
  <div>
    <h1>Регистрация</h1>
    <registr-form />
  </div>
</template>

<script>
import RegistrForm from "../components/RegistrForm.vue";

export default {
  name: "Registr",

  components: {
    RegistrForm,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
div {
  padding-top: 40px;
}
</style>