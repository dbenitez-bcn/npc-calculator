<template>
  <v-row class="ma-0" justify="end">
    <v-col cols="4" sm="2" xl="1" class="d-flex justify-center">
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <div v-bind="props"
            class="bg-white rounded d-flex justify-center align-center py-2 px-4 position-relative cursor-pointer">
            <v-img class="ml-2" :width="'24px'" aspect-ratio="16/9" :src="`/img/flag-${locale}.png`"></v-img>
            <v-icon icon="mdi-chevron-down"></v-icon>
          </div>
        </template>
        <v-list nav :min-width="'200px'">
          <v-list-item v-for="(code, i) in availableLocales" :key="i" color="primary" :active="code == locale"
            @click="setLocale(code)">
            <v-list-item-title>{{ getLanguageName(code) }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script setup>
const { locale, setLocale, availableLocales } = useI18n();
function getLanguageName(locale) {
  switch (locale) {
    case "ca":
      return "Català";
    case "de":
      return "Deutsch";
    case "es":
      return "Español";
    case "en":
      return "English";
    case "fr":
      return "Français";
    case "it":
      return "Italiano";
    case "pt":
      return "Português";
    default:
      return "More coming soon...";
  }
}
</script>

<style scoped></style>