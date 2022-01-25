<template>
  <div>
    <ul class="column">
      <h2 class="type-column" :class="type">{{ type + " (" + column.length + ")" }}</h2>
      <draggable
        group="cards"
        @change="(event) => moveCard(event, type)"
        :list="column"
      >
        <app-card
          v-for="card in column"
          :key="card.id"
          :card="card"
          :type="type"
        />
      </draggable>
      <div class="new-card-field">
        <textarea v-if="addNow" class="new-card" v-model="text" />
        <button class="new-card-btn" @click="cardCreate(type, text)">
          Добавить
        </button>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppCard from "./AppCard.vue";
import draggable from "vuedraggable";
export default {
  data() {
    return {
      text: "",
      addNow: false,
    };
  },
  components: { AppCard, draggable },
  props: {
    column: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
    },
  },
  computed: mapGetters(["columnsMap"]),
  methods: {
    ...mapActions(["newCard", "updateCard"]),
    cardCreate(type, text) {
      if (this.addNow) {
        const row = Object.values(this.columnsMap).indexOf(type);
        const card = {
          type,
          row,
          text,
        };
        this.newCard(card);
        this.text = "";
        this.addNow = false
      } else this.addNow = true
    },
    moveCard(event, type) {
      if (event.added) {
        const row = Object.values(this.columnsMap).indexOf(type);
        const card = event.added.element;
        card.row = row;
        card.seq_num = event.added.newIndex;
        this.updateCard(card);
      }
      if (event.moved) {
        const row = Object.values(this.columnsMap).indexOf(type);
        const card = event.moved.element;
        card.row = row;
        card.seq_num = event.moved.newIndex;
        this.updateCard(card);
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.type-column {
  background-color: #1a1a1b;
  margin-bottom: 10px;
}
.column {
  min-width: 300px;
  color: #909193;
  padding-bottom: 0;
  padding-right: 0px;
  padding-left: 0px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  background-color: #2b2c2f;
  list-style: none;
}
.new-card-field {
  display: flex;
  flex-direction: column;
}
.new-card {
  color: #909193;
  padding: 0;
  margin: 0;
  border: none;
  min-height: 100px;
  width: 100%;
  background-color: #555454;
}
.new-card-btn {
  padding: 10px 0px;
  background-color: #2b2c2f;
  margin: 10px;
}
.new-card-btn:hover {
  background-color: #1a1a1b;
}
.new-card,
textarea {
  padding: 0;
  outline: none;
}
.type-column {
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0;
}
</style>