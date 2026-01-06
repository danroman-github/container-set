import Team from '../js/team';
import Bowman from '../js/bowman.js';
import Swordsman from '../js/swordsman.js';
import Magician from '../js/magician.js';

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

        test('should throw error when adding duplicate character', () => {
            team.add(character1);
            expect(() => team.add(character1)).toThrow(/уже есть в команде/);
            expect(team.size()).toBe(1);
        });

        test('should throw error when adding non-Character object', () => {
            ['{}', null, undefined, 'string', 123, []].forEach(value => {
                expect(() => team.add(value)).
                    toThrow('Можно добавлять только объекты класса Character');
            })
        });

        test('should allow adding different character instances with same properties', () => {
            const character1Copy = new Bowman('Legolas');

            team.add(character1);
            team.add(character1Copy);

            expect(team.size()).toBe(2);
            expect(team.has(character1)).toBe(true);
            expect(team.has(character1Copy)).toBe(true);
        });

        test('should work with array spread', () => {
            const characters = [character1, character2, character3];
            team.addAll(...characters);

            expect(team.size()).toBe(3);
            expect(team.has(character1)).toBe(true);
            expect(team.has(character2)).toBe(true);
            expect(team.has(character3)).toBe(true);
        });

        test('should throw error for non-Character arguments', () => {
            team.clear();
            team.addAll(character1, {}, character2);
            expect(team.size()).toBe(2);
        });
    });
});