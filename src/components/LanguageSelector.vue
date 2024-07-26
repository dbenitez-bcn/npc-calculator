<template>
  <v-row class="ma-0" justify="end">
    <v-col v-on:click="onClick" v-click-outside="onClickOutisde" cols="6" sm="2">
      <div class="bg-white rounded d-flex justify-center align-center pa-4 position-relative cursor-pointer">
        <v-img class="ml-2" :width="'50%'" max-height="30" aspect-ratio="16/9" src="~/assets/img/flag-es.png"></v-img>
        <v-icon icon="mdi-chevron-down"></v-icon>
        <div v-if="isOpen" class="bg-white rounded language-list pa-4 ">
          <v-row v-for="language in languages" :key="language.code" class="d-flex align-center">
            <v-col cols="6"><v-img width="40px" height="60px" cover src="~/assets/img/flag-es.png" /></v-col>
            <v-col cols="3">
              <p class="ml-2">{{ language.title }}</p>
            </v-col>
          </v-row>

          <!-- <div v-for="language in languages" :key="language.code" class="d-flex align-center">
            <v-img width="40px" height="60px" cover src="~/assets/img/flag-es.png"/>
            <p class="ml-2">{{ language.title }}</p>
          </div> -->
          <!-- <div v-for="language in languages" :key="language.code"><v-img class="ml-2" :width="'25%'" max-height="30" aspect-ratio="16/9" :src="`~/assets/img/flag-${language.code}.svg`"></v-img> {{ language.title }}</div> -->
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false);
const languages = ref([{ code: "ca", title: "Català" }, { code: "de", title: "Deutsch" }, { code: "es", title: "Español" }, { code: "en", title: "English" }, { code: "fr", title: "Français" }, { code: "pt", title: "Português" }]);
function onClick(_) {
  isOpen.value = !isOpen.value;
}
function onClickOutisde(_) {
  if (isOpen.value) {
    isOpen.value = false;
  }
}
</script>

<style scoped>
.language-list {
  position: absolute;
  top: 104%;
  right: 0px;
  z-index: 1;
}
</style>