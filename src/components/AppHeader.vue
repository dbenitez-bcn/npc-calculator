<template>
  <div class="app-header">
    <v-container class="pa-4 d-flex flex-column">
      <LanguageSelector />
      <v-row class="justify-sm-center justify-sx-start">
        <v-col cols="8">
          <h1 class="text-h3">{{ $t("landing.title") }}</h1>
          <h2 class="text-h6">{{ $t("landing.sub-title") }}</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.app-header {
  background-image: url("~/assets/img/header-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>