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