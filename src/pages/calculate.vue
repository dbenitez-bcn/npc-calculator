<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column align-center">
        <Selector :items="genderButtons" :selected="friend.isMale ? 1 : 0" @onSelectedUpdate="updateGender" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column align-center" cols="12" sm="6">
        <h3 class="w-100 mb-6"> {{ $t("calculate.content.title1") }}</h3>
        <MultiSelector :items="musicButtons" :selecteds="friend.music" @onToggle="toggleMusic" />
        <Divider class="d-flex d-sm-none" />
      </v-col>
      <v-col class="d-flex flex-column align-center" cols="12" sm="6">
        <h3 class="w-100 mb-6"> {{ $t("calculate.content.title2") }}</h3>
        <MultiSelector :items="socialButtons" :selecteds="friend.social" @onToggle="toggleSocial" />
        <Divider class="d-flex d-sm-none" />
      </v-col>
    </v-row>
    <Divider class="d-none d-sm-flex" />
    <v-row>
      <v-col class="d-flex flex-column align-center" cols="12" sm="6">
        <h3 class="w-100 mb-2"> {{ $t("calculate.content.title3") }}</h3>
        <div class="d-flex h-100">
          <Selector class="align-self-center" :items="hairButtons" :selected="friend.hair" :fillWith="true"
            @onSelectedUpdate="updateHair" />
        </div>
        <Divider class="d-flex d-sm-none" />
      </v-col>
      <v-col class="d-flex flex-column align-center" cols="12" sm="6">
        <h3 class="w-100 mb-6"> {{ $t("calculate.content.title4") }}</h3>
        <MultiSelector :items="hobbieButtons" :selecteds="friend.hobbie" @onToggle="toggleHobbie" />
        <Divider class="d-flex d-sm-none" />
      </v-col>
    </v-row>
    <Divider class="d-none d-sm-flex" />
    <v-row>
      <v-col class="d-flex flex-column align-center">
        <v-btn class="my-4" variant="flat" rounded="xl" color="primary" @click="toResult">{{
          $t("calculate.content.btn1")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const friend = useFriend();
const { t, locale } = useI18n();

useHead({
  title: t(`calculate.title_${friend.gender}`)
})

definePageMeta({
  title: `calculate.title_`,
  headerSubtitle: ''
})

const genderButtons = [{
  src: "$female"
}, {
  src: "$male"
}]

const hairButtons = [{
  src: "$hair1"
}, {
  src: "$hair2"
}, {
  src: "$hair3"
}, {
  src: "$hair4"
}, {
  src: "$hair5"
}]

const socialButtons = [{
  src: "$social1",
  label: "calculate.content.social.label1"
}, {
  src: "$social2",
  label: "calculate.content.social.label2"
}, {
  src: "$social3",
  label: "calculate.content.social.label3"
}, {
  src: "$social4",
  label: "calculate.content.social.label4"
}, {
  src: "$social5",
  label: "calculate.content.social.label5"
}, {
  src: "$social6",
  label: "calculate.content.social.label6"
}]

const musicButtons = [{
  src: "$music1",
  label: "calculate.content.music.label1"
}, {
  src: "$music2",
  label: "calculate.content.music.label2"
}, {
  src: "$music3",
  label: "calculate.content.music.label3"
}, {
  src: "$music4",
  label: "calculate.content.music.label4"
}, {
  src: "$music5",
  label: "calculate.content.music.label5"
}, {
  src: "$music6",
  label: "calculate.content.music.label6"
}]

const hobbieButtons = [{
  src: "$hobbie1",
  label: "calculate.content.hobbie.label1"
}, {
  src: "$hobbie2",
  label: "calculate.content.hobbie.label2"
}, {
  src: "$hobbie3",
  label: "calculate.content.hobbie.label3"
}, {
  src: "$hobbie4",
  label: "calculate.content.hobbie.label4"
}, {
  src: "$hobbie5",
  label: "calculate.content.hobbie.label5"
}, {
  src: "$hobbie6",
  label: "calculate.content.hobbie.label6"
}]

function updateGender(index) {
  friend.setGender(index == 1 ? Gender.male : Gender.female);
}
function updateHair(index) {
  friend.hair = index
}

function toggleMusic(index) {
  friend.music[index] = !friend.music[index];
}

function toggleSocial(index) {
  friend.social[index] = !friend.social[index];
}

function toggleHobbie(index) {
  friend.hobbie[index] = !friend.hobbie[index];
}
function toResult() {
  const localePath = useLocalePath();
  navigateTo(localePath('/result'));
}
</script>

<style lang="scss" scoped></style>