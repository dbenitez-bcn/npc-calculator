<template>
  <NuxtLayout>
    <v-app>
      <div>
        <button @click="setLocale('en')">en</button>
        <button @click="setLocale('fr')">fr</button>
        <button @click="setLocale('es')">es</button>
        <p>{{ $t('welcome') }}</p>
      </div>
      <v-btn variant="elevated" class="bg-night-grey">
        Button
      </v-btn>
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
    </v-app>
  </NuxtLayout>
</template>
<script setup>
const { locale, setLocale } = useI18n()
</script>