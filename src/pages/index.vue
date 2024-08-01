<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <NuxtLink :to="localePath('/male')">
          <FriendButton :img-src="'/img/male-friend.png'" :title="'landing.content.btn1'" :is-reverse="false" />
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink :to="localePath('/female')">
          <FriendButton :img-src="'/img/female-friend.png'" :title="'landing.content.btn2'" :is-reverse="true" />
        </NuxtLink>
      </v-col>
    </v-row>
    <v-divider class="border-opacity-100 my-4 neon-shadow" color="secondary"></v-divider>
    <v-row>
      <v-col cols="12" sm="6">
        <h3 class="text-h6">{{ $t("landing.content.title1") }}</h3>
        <p class="text-body-1 text-sm-justify text-center">
          {{ $t("landing.content.body1") }}
        </p>
        <v-img class="rounded-circle mx-8 my-4" src="~/assets/img/landing-1.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <h3 class="text-h6">{{ $t("landing.content.title2") }}</h3>
        <p class="text-body-1 text-sm-justify text-center">
          {{ $t("landing.content.body2") }}
        </p>
        <v-img class="rounded-circle mx-8 my-4" src="~/assets/img/landing-2.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex align-center flex-column">
        <p class="text-body-1 text-center">
          {{ $t("landing.content.body3") }}
        </p>
        <v-btn class="my-4" variant="flat" rounded="xl" color="primary">{{
          $t("landing.content.btn3")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const { locale } = useI18n();

definePageMeta({
  headerTitle: "landing.title",
  headerSubtitle: "landing.sub-title"
})
</script>

<style></style>