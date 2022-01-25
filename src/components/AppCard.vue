<template>
  <li class="card">
    <p>{{ card.text }}</p>
    <button
    class="delete-btn"
    @click="deleteCard(type, card.id)"
    >
    Удалить</button>
  </li>
</template>

<script>

import { mapActions } from "vuex";

export default {
  props: {
    card: {
      type: Object,
    },
    type: {
      type: String,
    }
  },
  methods: {
    ...mapActions(['delCard']),
    deleteCard(type, id) {
      const deleteCardData = {
        type,
        id
      }
      this.delCard(deleteCardData)
    }
  }
};
</script>

<style scoped>
  .card {
    color: #fff;
    padding: 10px;
    background-color: blue;
    width: 200px;
    margin-bottom: 5px;
  }
  .delete-btn {
    background-color: coral;
    padding: 0 5px;
    border-radius: 5px;
  }

</style>