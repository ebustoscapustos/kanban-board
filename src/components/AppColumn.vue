<template>
  <div>
    <ul class="column">
      <h2>{{ type + ' (' + column.length + ')'}}</h2>
      <draggable
      group='cards'
      @change='event => end(event, type)'
      :list='column'
      >
        <app-card 
        v-for="card in column" 
        :key="card.id" 
        :card="card"
        :type='type'
        />
      </draggable>
    <div class="new-card-field">
      <input type="text" class="new-card" v-model="text" />
      <button class="new-card-btn" @click="cardCreate(type, text)">Добавить</button>
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
  computed: mapGetters(['columnsMap']),
  methods: {
    ...mapActions(['newCard', 'updateCard']),
    cardCreate(type, text) {
      const row = Object.values(this.columnsMap).indexOf(type)
      const card = {
        type,
        row,
        text,
      }
      this.newCard(card)
      this.text = ''
    },
    end(event, type) {
      console.log(event)
      if (event.added) {
        const row = Object.values(this.columnsMap).indexOf(type)
        const card = event.added.element;
        card.row = row
        card.seq_num = event.added.newIndex
        this.updateCard(card)
      }
      if (event.moved) {
        const row = Object.values(this.columnsMap).indexOf(type)
        const card = event.moved.element;
        card.row = row
        card.seq_num = event.moved.newIndex
        this.updateCard(card)
      }
    }
  },
};
</script>

<style>
.column {
  padding-bottom: 20px;
  padding-right: 24px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  background-color: burlywood;
}
.new-card-field {
  padding: auto;
}
.new-card {
  background-color: cadetblue;
}
.new-card-btn {
  background-color: coral;
}
</style>