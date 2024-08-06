<template>
    <div>
        <MultiSelector :items="genderButons" />
    </div>
</template>

<script setup>
const friend = useFriend();

const genderButons = [{
  src: "/icons/female.svg"
},{
  src: "/icons/male.svg"
}]
</script>

<style lang="scss" scoped></style>