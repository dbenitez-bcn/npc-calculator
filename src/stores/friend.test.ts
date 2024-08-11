import { setActivePinia, createPinia } from 'pinia'
import { Gender, useFriend } from './friend'
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
            sut.hair = 4;

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