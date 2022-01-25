<template>
  <div>
    <h1>Главная</h1>
    <div class="kanban-field">
      <app-column
        v-for="(column, index) of allCards"
        :key="index"
        :column="column"
        :type="index"
        />

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppColumn from "../components/AppColumn.vue";
import draggable from "vuedraggable";
export default {
  name: "Home",

  components: {
    AppColumn,
    draggable,
  },
  computed: mapGetters(["allCards"]),
  mounted() {
    this.getCards()
    },
  methods: {
    ...mapActions(['getCards']),
  }
};
</script>

<style scoped>
.kanban-field {
  display: flex;
}
</style>
