<template>
  <v-app>
    <NuxtLayout>
      <AppHeader />
      <v-container>
        <v-row>
          <v-col class="d-flex flex-column align-center vh-75 justify-center">
            <span class="text-h3 text-center">{{ $t("error.content.title") }}</span>
            <span class="my-2 text-h4 font-weight-bold">{{ error.statusCode }}</span>
            <v-btn class="my-2" variant="outlined" rounded="xl" color="primary" @click="navigateTo(localePath('/'))">{{
              $t("error.content.btn") }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <NuxtRouteAnnouncer />
      <AppFooter />
    </NuxtLayout>
  </v-app>
</template>
<script setup>
const props = defineProps({
  error: Object
})

</script>
<style scoped>
.vh-75 {
  height: 65dvh
}
</style>