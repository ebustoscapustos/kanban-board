<template>
  <ul class="column">
    <h2>{{ column }}</h2>
    <draggable 
    group="cards"
    :list="column"
    @start = onStart
    @end = onEnd
    >
      <app-card
      v-for="card in column"
      :key="card.title"
      :card="card"
      />
    </draggable>
  </ul>
</template>

<script>
import AppCard from "./AppCard.vue";
import draggable from 'vuedraggable'
export default {
  components: { AppCard, draggable },
  props: {
      column: {
          type: Array
      }
  },
  methods: {
    onStart(e) {
      console.log(e)
    },
    onEnd() {
      console.log('555')
    }
  }
};
</script>

<style>
  .column {
    display: flex;
    flex-direction: column;
  }
</style>