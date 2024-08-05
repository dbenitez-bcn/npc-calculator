<template>
  <NpcForm />
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
</script>

<style lang="scss" scoped></style>