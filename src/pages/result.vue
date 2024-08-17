<template>
  <v-container>
    <v-row justify="center">
      <v-col class="d-flex flex-column align-center" cols="6">
        <NpcScoreIndicator />
        <div class="d-flex flex-column align-center mt-2">
          <v-btn
            class="my-2 align-self-stretch"
            variant="flat"
            rounded="xl"
            color="primary"
            @click="toCalculate"
            >{{ $t("result.content.btn1") }}</v-btn
          >
          <ShareButton />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const friend = useFriend();
const { t, locale } = useI18n();

useHead({
  title: t(`result.title_${friend.gender}`),
});

definePageMeta({
  title: `result.title_`,
  headerSubtitle: "",
});

function toCalculate() {
  const localePath = useLocalePath();
  navigateTo(localePath("/calculate"));
  friend.$reset();
}
</script>

<style lang="scss" scoped></style>