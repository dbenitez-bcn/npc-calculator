import { defineStore } from 'pinia';

export enum Gender {
    male = 'm',
    female = 'f'
}

export const useFriend = defineStore('friend', () => {
    const gender = ref(Gender.male);
    const hair = ref(0);
    const music = ref<boolean[]>([]);
    const social = ref<boolean[]>([]);
    const hobbie = ref<boolean[]>([]);

    const isMale = computed(() => gender.value == Gender.male ? true : false);

    function setGender(value: Gender) {
        gender.value = value;
    }
    const npcScore = computed(() => {
        const musicScore = getScore(music.value, [22, 50, -36, 38, -50, -24]) * 0.34;
        const socialScore = getScore(social.value, [-50, 0, 12, 50, 29, -41]) * 0.33;
        const hobbieScore = getScore(hobbie.value, [-3, 5, -19, 17, 50, -50]) * 0.33;
        return Math.floor(musicScore + hobbieScore + socialScore);
    });

    function getScore(activeStats: boolean[], values: number[]): number {
        return activeStats.reduce((sum, isTrue, index) => {
            return isTrue ? sum + values[index] : sum;
        }, 50);
    }

    function $reset() {
        hair.value = 0;
        music.value = [];
        social.value = [];
        hobbie.value = [];
    }

    return { gender, hair, music, social, hobbie, isMale, setGender, npcScore, $reset };
});