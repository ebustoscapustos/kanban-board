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

<style scoped lang='scss'>
  .card {
    color: #797b7e;
    padding: 10px;
    background-color: #1a1a1b;
    margin: 10px;
  }
  .delete-btn {
    width: 100%;
    background-color: #1a1a1b;
    padding: 5px;
  }
.delete-btn:hover {
  background-color: #555454;
}
</style>