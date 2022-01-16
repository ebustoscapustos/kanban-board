<template>
  <v-form ref="form" class="auth-field">
    <v-text-field
      v-model="user.username"
      label="Введите имя пользователя"
      required
    >
    </v-text-field>

    <v-text-field v-model="user.password" label="Введите пароль" required>
    </v-text-field>

    <v-btn color="warning" :disabled="valid" @click="authUser"> Войти </v-btn>
  </v-form>
</template>

<script>
import httpClient from "@/api/httpClient";
export default {
  name: "AuthForm",

  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    valid() {
      return this.userEmail !== "" && this.userPassword !== "" ? false : true;
    },
  },
  methods: {
    async authUser() {
      console.log("click");
      try {
        const res = await httpClient.post("/users/login/", {
          username: this.user.username,
          password: this.user.password,
        });
        localStorage.setItem("token", res.data.token);
        this.$router.push("/");
      } catch (e) {
        throw e;
      }
    },
    test() {
      console.log("test");
    },
  },

  components: {},
};
</script>

<style scoped>
.auth-field {
  margin: auto;
  margin-top: 30px;
  width: 600px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 30px 50px;
}
</style>