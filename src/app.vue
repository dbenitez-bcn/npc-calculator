<template>
  <v-app>
    <NuxtLayout>
      <AppHeader />
      <v-container>
        <v-row>
          <v-col class="d-none d-lg-flex">
            <!-- TODO: Add ads here -->
          </v-col>
          <v-col class="pa-0" lg="8">
            <NuxtPage />
          </v-col>
          <v-col class="d-none d-lg-flex">
            <!-- TODO: Add ads here -->
          </v-col>
        </v-row>
      </v-container>
      <NuxtRouteAnnouncer />
      <AppFooter />
    </NuxtLayout>
  </v-app>
</template>
<script setup>
</script>