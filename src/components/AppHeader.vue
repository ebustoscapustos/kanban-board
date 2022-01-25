<template>
  <div class="header-wrapper">
      <v-app-bar class="header-bar" height="50px">
          <v-tabs align-with-title>
          <v-tab 
          @click="goToLink(link)"
          v-for="link of links"
          :key="link.path"
          >
          {{ link.title }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      links: [
        {
          title: "Главная",
          path: "/",
          icon: "",
        },
        {
          title: "Регистрация",
          path: "/registr",
          icon: "",
        },
        {
          title: "Авторизация",
          path: "/auth",
          icon: "",
        },
      ],
    };
  },
  components: {},
  methods: {
      goToLink(link) {
          this.$router.push(link.path)
      }
  }
};
</script>

<style lang="scss" scoped>
.header-bar {
  color: #000;
}

</style>