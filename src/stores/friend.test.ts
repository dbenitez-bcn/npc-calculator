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
        expect(sut.hair).toBe(-1);
        expect(sut.music).toStrictEqual([false, false, false, false, false]);
        expect(sut.social).toStrictEqual([false, false, false, false, false]);
        expect(sut.hobbie).toStrictEqual([false, false, false, false, false]);
    })
    describe('isMale', () => {
        it('Should return true when gender is male', () => {
            const sut =  useFriend();
            sut.setGender(Gender.male);
            expect(sut.isMale).toBeTruthy();
        })
        it('Should return false when gender is female', () => {
            const sut =  useFriend();
            sut.setGender(Gender.female);
            expect(sut.isMale).toBeFalsy();
        })
    })
})