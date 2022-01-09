<template>
  <v-form ref="form">
    <v-text-field
    v-model="userName"
      label="Укажите имя"
      required
    >
    </v-text-field>

    <v-text-field
    v-model="userEmail"
      label="Укажите E-mail"
      required
    >
    </v-text-field>

    <v-text-field
    v-model="userPassword"
      label="Придумайте пароль"
      required
    >
    </v-text-field>

    <v-text-field
      label="Повторите пароль"
      required
    >
    </v-text-field>

    <v-btn 
    color="warning"
    :disabled="valid" 
    @click="registrUser"
    > 
    Регистрация 
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "RegistrForm",

  data() {
      return {
          userName: '',
          userEmail: '',
          userPassword: '',
      }
  },
  computed: {
       
  },
  methods: {
      registrUser() {
          const user = {
              name: this.userName,
              email: this.userEmail,
              password: this.userPassword
          }
          console.log(user)
      },
  },
  
  components: {},
};
</script>