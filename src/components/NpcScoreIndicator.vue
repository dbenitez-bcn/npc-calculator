<template>
    <div class="d-flex flex-column align-center">
        <div class="indicator-box bg-background">
            <v-progress-circular class="center" :model-value="progress * 0.75" :rotate="-135" :size="200" :width="15"
                :color="barColor">
                <h3>{{ progress }}</h3>
            </v-progress-circular>
        </div>
        <h1 class="bg-background mt-n10 z-1">{{ message }}</h1>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const friend = useFriend();
const { t } = useI18n();
const message = ref(t(`result.content.title1`));
const isLoading = ref(true);
const progress = ref(0);
const barColor = ref('red')

onMounted(() => {
    setTimeout(() => {
        increment();
    }, 4000)
})

function increment() {
    setTimeout(() => {
        if (progress.value >= 90) barColor.value = 'ultimate-green';
        else if (progress.value > 75) barColor.value = 'soft-thunder';
        else if (progress.value > 30) barColor.value = 'yellow';
        else if (progress.value > 10) barColor.value = 'warning';
        else barColor.value = 'red';
        if (progress.value < friend.npcScore) {
            progress.value++
            increment();
        } else {
            message.value = t(`result.content.title2_${friend.gender}`, { "score": friend.npcScore });
            isLoading.value = false;
        }
    }, 1500/friend.npcScore);
}

</script>

<style scoped>
.indicator-box {
    width: 200px;
    height: 200px;
    position: relative;
}

.z-1 {
    z-index: 1;
}

.center {
    width: 100%;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
}


.foo {
    width: 100%;
    height: 15px;
    position: absolute;
    bottom: 0px;
}

.foo2 {
    width: 100%;
    height: 15px;
    position: absolute;
    bottom: -10px;
}
</style>