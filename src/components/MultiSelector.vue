<template>
    <div class="d-flex justify-space-between">
        <div class="d-flex flex-column align-center" v-for="(item, i ) in items" :key="i">
            <div class="border-md border-primary border-opacity-100 rounded-lg cursor-pointer" @click="$emit('onToggle', i)" :class=" selecteds[i] ? 'bg-primary' : ''">
                <v-icon :icon="item.src" size="42" class="ma-4" />
            </div>
            <span class="text-h6" v-if="item.label">{{ $t(item.label) }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    items: Array,
    selecteds: Array
})

</script>

<style lang="scss" scoped></style>