import Character from './character.js';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    // Добавляет персонажа в команду
    add(character) {
        // Проверка типа
        if (!(character instanceof Character)) {
            throw new Error('Можно добавлять только объекты класса Character');
        }

        // Проверка на дубликат
        if (this.members.has(character)) {
            throw new Error('Этот персонаж уже есть в команде');
        }

        this.members.add(character);
    }

    // Добавляет несколько персонажей в команду
    addAll(...characters) {
        // Добавляем только уникальных
        characters.forEach((character) => {
            try {
                this.add(character);
            } catch (error) {
                // console.warn(`Ошибка при добавлении персонажа ${character.name || character}: ${error.message}`);
            }
        });
    }

    // Конвертирует Set в массив
    toArray() {
        return Array.from(this.members);
    }

    clear() {
        this.members.clear();
    }

    // Возвращает количество персонажей в команде
    size() {
        return this.members.size;
    }

    // Проверяет, есть ли персонаж в команде
    has(character) {
        return this.members.has(character);
    }
}