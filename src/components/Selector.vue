<template>
  <div class="d-inline-flex justify-space-between border-md border-primary rounded-lg">
    <div v-for="(item, i) in items" :key="i" class="cursor-pointer" :class="selected == i ? 'bg-primary' : ''"
      @click="$emit('onSelectedUpdate', i)">
      <v-icon :icon="item.src" size="42" class="ma-2"></v-icon>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
  selected: Number
});
</script>