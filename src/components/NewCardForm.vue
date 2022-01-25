<template>
    <div>
        <input 
        type="text"
        class="new-card"
        v-model='text'
        >
        <button
        class="new-card-btn"
        @click="cardCreate"
        >
        Добавить
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        cardCreate() {
            this.$emit('newCardCreate', this.text)
        }
    }
}
</script>

<style scoped lang='scss'>
.new-card {
    background-color: cadetblue;
}
.new-card-btn {
    background-color: coral;
}
</style>