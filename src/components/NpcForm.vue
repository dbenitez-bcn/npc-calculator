<template>
    <div>
        {{ friend.isMale ? "Male!" : "Female!" }}
    </div>
</template>

<script setup>
const friend = useFriend();

</script>

<style lang="scss" scoped></style>