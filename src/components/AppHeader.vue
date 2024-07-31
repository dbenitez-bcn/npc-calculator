<template>
  <div class="app-header">
    <v-container class="pa-4 d-flex flex-column">
      <v-row class="ma-0" justify-sm="end" justify="space-between">
        <v-col class="pa-0 d-block d-sm-none" cols="2">
          <AppLogo />
        </v-col>
        <v-col cols="4" sm="2" xl="1" class="d-flex justify-center align-self-center">
          <LanguageSelector />
        </v-col>
      </v-row>
      <v-row class="justify-lg-center justify-sx-start">
        <v-col class="d-none d-sm-block pa-0" cols="1" sm="2" lg="1">
          <AppLogo />
        </v-col>
        <v-col class="d-flex flex-column justify-center" lg="7">
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