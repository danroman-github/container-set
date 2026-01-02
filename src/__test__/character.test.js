import Character from '../js/character';

describe('Character class', () => {
    test('should create character with valid name and type', () => {
        const character = new Character('ValidName', 'Bowman');
        
        expect(character.name).toBe('ValidName');
        expect(character.type).toBe('Bowman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
    });

    test('error message due to name (too short)', () => {
        expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('error message due to name (too long)', () => {
        expect(() => new Character('VeryLongName123', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('error message due to name (not a string)', () => {
        expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('should throw error for invalid type', () => {
        expect(() => new Character('Hero', 'InvalidType')).toThrow('Некорректный тип персонажа');
    });
});
