import { defineStore } from 'pinia';

export enum Gender {
    male = 'm',
    female = 'f'
}
export enum Hair {
    black = 0,
    brown = 1,
    blond = 2,
    red = 3,
    pink = 4
}

export const useFriend = defineStore('friend', () => {
    const gender = ref(Gender.male);
    const hair = ref(Hair.black);
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
        return scoreRectifier((musicScore + hobbieScore + socialScore) * getHairMultiplier());
    });

    function getScore(activeStats: boolean[], values: number[]): number {
        return activeStats.reduce((sum, isTrue, index) => {
            return isTrue ? sum + values[index] : sum;
        }, 50);
    }

    function getHairMultiplier(): number {
        let multiplier = 1;

        if (isMale.value) {
            switch (hair.value) {
                case Hair.black:
                    multiplier = 1;
                    break;
                case Hair.brown:
                case Hair.blond:
                    multiplier = 0.9;
                    break;
                case Hair.red:
                    multiplier = 0.8;
                    break;
                case Hair.pink:
                    multiplier = 1.1;
                    break;
            }
        } else {
            switch (hair.value) {
                case Hair.black:
                    multiplier = 1;
                    break;
                case Hair.brown:
                case Hair.red:
                    multiplier = 0.8;
                    break;
                case Hair.blond:
                case Hair.pink:
                    multiplier = 1.1;
                    break;
            }
        }
        return multiplier;
    }

    function scoreRectifier(score: number): number {
        let rectified = score;

        if (score > 100) {
            rectified = 90 + (score - 100) / 10;
        } else if (score < 0) {
            rectified = (100 + score) / 10;
        }
        const isBetween0And100 = rectified >= 0 && rectified <= 100;

        return isBetween0And100 ? Math.floor(rectified) : scoreRectifier(rectified);
    }

    function $reset() {
        hair.value = 0;
        music.value = [];
        social.value = [];
        hobbie.value = [];
    }

    return { gender, hair, music, social, hobbie, isMale, setGender, npcScore, $reset };
});