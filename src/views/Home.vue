<template>
  <div class="main-wrapper">
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
  async mounted() {
      await this.getCards()
    },
  methods: {
    ...mapActions(['getCards']),
  }
};
</script>

<style scoped lang='scss'>
.main-wrapper {
  height: 100%;
  background-color: #373b40;
}
.kanban-field {
  display: flex;
  justify-content: space-around;
}
</style>
