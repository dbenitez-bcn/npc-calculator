<template>
  <v-container>
    <v-row>
      <v-col>
        <Selector :items="genderButons" :selected="friend.isMale ? 1 : 0" @onSelectedUpdate="updateGender" />
        <h3 class="w-100"> {{ $t("calculate.content.title1") }}</h3>
        <Selector :items="hairButons" :selected="friend.hair" @onSelectedUpdate="updateHair" />
        <Divider />
        <v-btn class="my-4" variant="flat" rounded="xl" color="primary">{{
          $t("calculate.content.btn1")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const friend = useFriend();
const { t } = useI18n();

useHead({
  title: t(`calculate.title_${friend.gender}`)
})

definePageMeta({
  title: `calculate.title_`,
  headerSubtitle: ''
})

const genderButons = [{
  src: "$female"
}, {
  src: "$male"
}]

const hairButons = [{
  src: "$hair1"
}, {
  src: "$hair2"
}, {
  src: "$hair3"
}, {
  src: "$hair4"
}, {
  src: "$hair5"
},]

function updateGender(index) {
  friend.setGender(index == 1 ? Gender.male : Gender.female);
}
function updateHair(index) {
  friend.hair = index
}
</script>

<style lang="scss" scoped></style>