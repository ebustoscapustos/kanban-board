<template>
  <v-app>
    <app-header/>
    <router-view/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

