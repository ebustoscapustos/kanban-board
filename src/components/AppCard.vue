<template>
  <li class="card">
    <h3>{{ card.title }}</h3>
    <p>{{ card.text }}</p>
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
};
</script>

<style scoped>
  .card {
    color: #fff;
    padding: 10px;
    background-color: blue;
    width: 200px;
    margin-bottom: 5px  ;
  }

</style>