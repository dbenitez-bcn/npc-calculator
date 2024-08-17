<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <FriendButton
          :img-src="'/img/male-friend.png'"
          :title="'landing.content.btn1'"
          :is-reverse="false"
          @click="navigateToCalculate(Gender.male)"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <FriendButton
          :img-src="'/img/female-friend.png'"
          :title="'landing.content.btn2'"
          :is-reverse="true"
          @click="navigateToCalculate(Gender.female)"
        />
      </v-col>
    </v-row>
    <Divider />
    <v-row>
      <v-col cols="12" sm="6">
        <h3 class="text-h6">{{ $t("landing.content.title1") }}</h3>
        <p
          v-html="$t('landing.content.body1')"
          class="text-body-1 text-sm-justify text-center"
        />
        <v-img
          class="rounded-circle mx-8 my-4"
          src="~/assets/img/landing-1.jpg"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <h3 class="text-h6">{{ $t("landing.content.title2") }}</h3>
        <p
          v-html="$t('landing.content.body2')"
          class="text-body-1 text-sm-justify text-center"
        />
        <v-img
          class="rounded-circle mx-8 my-4"
          src="~/assets/img/landing-2.jpg"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <h3 class="text-h6">{{ $t("landing.content.title3") }}</h3>
        <p class="text-body-1 text-sm-justify text-center">
          {{ $t("landing.content.body3") }}
        </p>
        <v-img
          class="rounded-circle mx-8 my-4"
          src="~/assets/img/landing-3.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex align-center flex-column">
        <p class="text-body-1 text-center">
          {{ $t("landing.content.body4") }}
        </p>
        <v-btn
          class="my-4"
          variant="flat"
          rounded="xl"
          color="primary"
          @click="navigateToCalculate(friend.gender)"
          >{{ $t("landing.content.btn3") }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const friend = useFriend();
const { t } = useI18n();

useHead({
  title: t(`landing.title_${friend.gender}`),
});
definePageMeta({
  title: "landing.title_",
  headerSubtitle: "landing.sub-title",
});

function navigateToCalculate(gender: Gender) {
  friend.setGender(gender);
  const localePath = useLocalePath();
  navigateTo(localePath("/calculate"));
}
</script>
<style></style>