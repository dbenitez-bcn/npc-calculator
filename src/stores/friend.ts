import { defineStore } from 'pinia';

export enum Gender {
    male = 'm',
    female = 'f'
}

export const useFriend = defineStore('friend', () => {
    const gender = ref(Gender.male);
    const hair = ref(-1);
    const music = ref([]);
    const social = ref([]);
    const hobbie = ref([]);

    const isMale = computed(() => gender.value == Gender.male ? true : false);

    function setGender(value: Gender) {
        gender.value = value;
    }

    return { gender, hair, music, social, hobbie, isMale, setGender };
});