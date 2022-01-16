<template>
  <div>
    <h1>Авторизация</h1>
    <auth-form/>
  </div>
</template>

<script>
import AuthForm from '../components/AuthForm.vue';

export default {
  name: "Auth",

  components: {
    AuthForm
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