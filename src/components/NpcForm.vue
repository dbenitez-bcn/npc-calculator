<template>
    <div>
        {{ isMale ? "Male!" : "Female!" }}
    </div>
</template>

<script setup>
defineProps({
    isMale: Boolean
})

</script>

<style lang="scss" scoped></style>