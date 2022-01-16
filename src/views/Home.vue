<template>
<div>
  <h1>Главная</h1>
  <div>
      <h2>On-Hold</h2>
      <app-column
      :column='onHold'
      />
      <h2>In-Process</h2>
      <app-column
      :column='inProgress'
      />
      <h2>Needs-Review</h2>
      <app-column
      :column='needsReveiw'
      />
      <h2>Approved</h2>
      <app-column
      :column='approved'
      />
  </div>
</div>
</template>

<script>
import AppColumn from '../components/AppColumn.vue'
import draggable from 'vuedraggable'
  export default {
    name: 'Home',
    
    data() {
      return {
        onHold: [
          {
            title: 'One',
            text: '1',
          },
          {
            title: 'Two',
            text: '2',
          },
          {
            title: 'Three',
            text: '3',
          }
        ],
        inProgress: [
          {
            title: 'One1',
            text: '12',
          },
          {
            title: 'Two2',
            text: '23',
          },
          {
            title: 'Three3',
            text: '43',
          }
        ],
        needsReveiw: [],
        approved: []
      }
    },

    components: {
        AppColumn, draggable
    
    },
  }
</script>
