import { setActivePinia, createPinia } from 'pinia'
import { Gender, useFriend, Hair } from './friend'
import { describe, beforeEach, it, expect } from 'vitest';
describe('Friend store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });
    it('should have an initial state', () => {
        const sut = useFriend();
        expect(sut.gender).toBe('m');
        expect(sut.hair).toBe(0);
        expect(sut.music.length).toBe(0);
        expect(sut.social.length).toBe(0);
        expect(sut.hobbie.length).toBe(0);
    })
    describe('isMale', () => {
        it('Should return true when gender is male', () => {
            const sut = useFriend();
            sut.setGender(Gender.male);
            expect(sut.isMale).toBeTruthy();
        })
        it('Should return false when gender is female', () => {
            const sut = useFriend();
            sut.setGender(Gender.female);
            expect(sut.isMale).toBeFalsy();
        })
    })

    describe('npcScore', () => {
        it('Should return 50 when nothing is selected', () => {
            const sut = useFriend();

            expect(sut.npcScore).toBe(50);
        });
        it('Should return 50 when all is selected and hair is not 5', () => {
            const sut = useFriend();
            sut.music = [true, true, true, true, true, true];
            sut.social = [true, true, true, true, true, true];
            sut.hobbie = [true, true, true, true, true, true];
            sut.hair = 0;

            expect(sut.npcScore).toBe(50);
        });
        it('Should return 100 when npc starts are high', () => {
            const sut = useFriend();
            sut.music = [false, true, false, false, false, false];
            sut.social = [false, false, false, true, false, false];
            sut.hobbie = [false, false, false, false, true, false];
            sut.setGender(Gender.female);
            sut.hair = 0;

            expect(sut.npcScore).toBe(100);
        });
        it('Should return 0 when npc starts are low', () => {
            const sut = useFriend();
            sut.music = [false, false, false, false, true, false];
            sut.social = [true, false, false, false, false, false];
            sut.hobbie = [false, false, false, false, false, true];
            sut.hair = 0;

            expect(sut.npcScore).toBe(0);
        });

        it.each([
            [50, Hair.black, Gender.male],
            [45, Hair.brown, Gender.male],
            [45, Hair.blond, Gender.male],
            [40, Hair.red, Gender.male],
            [55, Hair.pink, Gender.male],
            [50, Hair.black, Gender.female],
            [40, Hair.brown, Gender.female],
            [55, Hair.blond, Gender.female],
            [40, Hair.red, Gender.female],
            [55, Hair.pink, Gender.female],
        ])('Should return %i when hair is %i and gender %s with default values', (score, hair, gender) => {
            const sut = useFriend();
            sut.hair = hair;
            sut.setGender(gender)

            expect(sut.npcScore).toBe(score);
        });
    })

    it('Should maintain the score under 100', () => {
        const sut = useFriend();
        sut.music = [true, true, false, true, false, false];
        sut.social = [false, false, true, true, true, false];
        sut.hobbie = [false, true, false, true, true, false];
        sut.hair = 4;

        expect(sut.npcScore).toBe(95);
    })
    it('Should maintain the score above 0', () => {
        const sut = useFriend();
        sut.music = [false, false, true, false, true, true];
        sut.social = [true, false, false, false, false, true];
        sut.hobbie = [true, false, true, false, false, true];
        sut.hair = 4;

        expect(sut.npcScore).toBe(5);
    })

    describe('$reset', () => {
        it('should reset state', () => {
            const sut = useFriend();

            sut.music = [true];
            sut.social = [true];
            sut.hobbie = [true];
            sut.hair = 2;
            sut.$reset();

            expect(sut.hair).toBe(0);
            expect(sut.music.length).toBe(0);
            expect(sut.social.length).toBe(0);
            expect(sut.hobbie.length).toBe(0);

        })
    })
})