<template>
  <div
    class="friend-button-container rounded-lg bg-primary border-md border-secondary d-flex justify-space-between align-center cursor-pointer"
    :class="isReverse ? 'flex-row-reverse right-radius-bg' : 'flex-row left-radius-bg'">
    <div class="img-container">
      <v-img :src="imgSrc" :height="'100%'" cover/>
    </div>
    <h2 class="text-md-h5 text-h6 px-4 align-self-center">{{ $t(title) }}</h2>
    <i></i>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  title: String,
  isReverse: Boolean
})
</script>

<style>
.img-container {
  width: 100px;
  height: 100px;
  transition: all 0.3s ease-out;
}
.friend-button-container {
  height: 100px;
  overflow: hidden;
}
.right-radius-bg:hover {
  background: radial-gradient(at right top, rgb(var(--v-theme-soft-thunder)), rgb(var(--v-theme-night-blue)));
}
.left-radius-bg:hover {
  background: radial-gradient(at left top, rgb(var(--v-theme-soft-thunder)), rgb(var(--v-theme-night-blue)));
}
.friend-button-container:hover .img-container {
  transform: scale(1.25);
  transition: transform 0.3s ease-in-out;
}
</style>