<template>
  <div class="d-flex flex-column align-center">
    <Selector :items="genderButons" :selected="friend.isMale ? 1 : 0" @onSelectedUpdate="updateGender" />
  </div>
</template>

<script setup>
const friend = useFriend();

const genderButons = [{
  src: "$female"
}, {
  src: "$male"
}]

function updateGender(index) {
  friend.setGender(index == 1 ? Gender.male : Gender.female);
}
</script>

<style lang="scss" scoped></style>