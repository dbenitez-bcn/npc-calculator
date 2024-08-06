<template>
  <div class="d-inline-flex justify-space-between border-md border-primary border-opacity-100 rounded-lg" :class="fillWith ? 'w-100' : ''">
    <div v-for="(item, i) in items" :key="i" class="cursor-pointer" :class="selected == i ? 'bg-primary' : ''"
      @click="$emit('onSelectedUpdate', i)">
      <v-icon :icon="item.src" size="42" class="ma-4"></v-icon>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
  selected: Number
});
</script>