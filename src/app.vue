<template>
  <v-app>
    <NuxtLayout>
      <AppHeader />
      <NuxtPage />
      <NuxtRouteAnnouncer />
      <AppFooter />
    </NuxtLayout>
  </v-app>
</template>
<script setup>
const { locale, setLocale } = useI18n()
</script>