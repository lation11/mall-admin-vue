<template>
   <div class="statistics-container">
    <Card></Card>
    <Charts></Charts>
   </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Charts from '@/components/Charts.vue'
export default {
    components:{
        Card,
        Charts
    }
}
</script>

<style lang="scss" scoped></style>