import Team from '../js/team';
import Character from '../js/character';
import Bowman from '../js/Bowman.js';
import Swordsman from '../js/Swordsman.js';
import Magician from '../js/Magician.js';

describe('Team class', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Bowman('Лучник');
        character2 = new Swordsman('Мечник');
        character3 = new Magician('Волшебник');
    });

    afterEach(() => {
        team.clear && team.clear();
    });

    describe('Constructor', () => {
        test('should create empty team', () => {
            expect(team.members).toBeInstanceOf(Set);
            expect(team.size()).toBe(0);
            expect(team.toArray()).toEqual([]);
        });

        test('should throw error when adding non-Character object', () => {
            expect(() => team.add({})).toThrow('Можно добавлять только объекты класса Character');
            expect(() => team.add(null)).toThrow('Можно добавлять только объекты класса Character');
            expect(() => team.add(undefined)).toThrow('Можно добавлять только объекты класса Character');
            expect(() => team.add('string')).toThrow('Можно добавлять только объекты класса Character');
            expect(() => team.add(123)).toThrow('Можно добавлять только объекты класса Character');
            expect(() => team.add([])).toThrow('Можно добавлять только объекты класса Character');
        });

        test('should work with array spread', () => {
            const characters = [character1, character2, character3];
            team.addAll(...characters);

            expect(team.size()).toBe(3);
        });

        test('should mix existing and new characters', () => {
            team.add(character1);
            team.addAll(character1, character2, character3);

            expect(team.size()).toBe(3);
        });

        test('should throw error for non-Character arguments', () => {
            expect(() => team.addAll(character1, {}, character2)).toThrow('Можно добавлять только объекты класса Character');
            expect(team.size()).toBe(0);
        });
    });
});