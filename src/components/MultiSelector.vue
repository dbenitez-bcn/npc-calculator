<template>
    <v-container class="pa-0">
        <v-row justify="center">
            <v-col class="d-flex flex-column align-center pt-0" v-for="(item, i ) in items" :key="i" cols="4">
                <div class="border-md border-primary rounded-lg cursor-pointer" @click="$emit('onToggle', i)" :class=" selecteds[i] ? 'bg-primary' : ''">
                <v-icon :icon="item.src" size="42" class="ma-4" />
            </div>
            <span class="text-h6" v-if="item.label">{{ $t(item.label) }}</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
defineProps({
    items: Array,
    selecteds: Array
})

</script>

<style lang="scss" scoped></style>