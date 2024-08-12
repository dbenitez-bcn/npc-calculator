<template>
    <div class="d-flex flex-column align-center">
        <div class="indicator-box bg-background">
            <v-progress-circular class="center" :model-value="progress * 0.75" :rotate="-135" :size="200" :width="15"
                :color="barColor">
            </v-progress-circular>
            <span class="center-absolute text-h2 font-weight-medium">{{ progress }}%</span>
        </div>
        <h1 class="bg-background mt-n10 z-1 text-center breathing-text">
            <span :class="isLoading ? 'shimmer-text' : ''">
                {{ message }}
            </span>
        </h1>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const friend = useFriend();
const { t } = useI18n();
const message = ref(t(`result.content.title1`));
const isLoading = ref(true);
const progress = ref(0);
const barColor = ref('white')

onMounted(() => {
    setTimeout(() => {
        increment();
    }, 500)
})

function increment() {
    setTimeout(() => {
        if (progress.value >= 80) barColor.value = 'ultimate-green';
        else if (progress.value > 60) barColor.value = 'soft-thunder';
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
    }, 2000/friend.npcScore);
}

</script>

<style scoped>
.indicator-box {
    width: 200px;
    height: 200px;
    position: relative;
}

.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.z-1 {
    z-index: 1;
}

.shimmer-text {
    color: transparent;
    background: linear-gradient(to right, white, white, white, rgb(148, 148, 148), white, white);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% {
        background-position: 0%;
    }

    100% {
        background-position: -150%;
    }
}
</style>