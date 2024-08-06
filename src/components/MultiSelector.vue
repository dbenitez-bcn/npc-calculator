<template>
  <div class="d-flex border-md border-primary border-opacity-100 rounded">
    <div v-for="(item, i) in items" :key="i">
      <v-img :width="42" :aspect-ratio="1" :src="item.src" color="red"></v-img>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>

<style scoped>
.hellyeah path {
    fill: #43e2d2
}
</style>