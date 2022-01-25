<template>
  <v-form ref="form" class="registr-field">
    <v-text-field v-model="user.name" label="Укажите имя" required>
    </v-text-field>

    <v-text-field v-model="user.email" label="Укажите E-mail" required>
    </v-text-field>

    <v-text-field
      type="password"
      v-model="user.password"
      label="Придумайте пароль"
      required
    >
    </v-text-field>

    <p>{{ errors }}</p>
    <v-btn color="warning" :disabled="valid" @click="registrUser">
      Регистрация
    </v-btn>
  </v-form>
</template>

<script>
import httpClient from "@/api/httpClient";
export default {
  name: "RegistrForm",

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      errors: "",
    };
  },
  computed: {
    valid() {
      return this.userEmail !== "" &&
        this.userPassword !== "" &&
        this.userName !== ""
        ? false
        : true;
    },
  },
  methods: {
    async registrUser() {
      try {
        const res = await httpClient.post("/users/create/", {
          username: this.user.name,
          email: this.user.email,
          password: this.user.password,
        });
        localStorage.setItem("token", res.data.token);
        this.$router.push("/");
      } catch (e) {
        throw e;
      }
    },
   
  },
 

  components: {},
};
</script>

<style scoped>
.registr-field {
  margin: auto;
  margin-top: 30px;
  width: 600px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 30px 50px;
}
</style>