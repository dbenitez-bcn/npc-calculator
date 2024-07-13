<template>
  <v-app>
    <NuxtLayout>
      <AppHeader/>
      <!-- <div>
        <button @click="setLocale('en')">en</button>
        <button @click="setLocale('fr')">fr</button>
        <button @click="setLocale('es')">es</button>
        <p>{{ $t('welcome') }}</p>
      </div> -->
      <NuxtPage />
      <NuxtRouteAnnouncer />
    </NuxtLayout>
  </v-app>
</template>
<script setup>
const { locale, setLocale } = useI18n()
</script>