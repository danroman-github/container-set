import Character from './character.js';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    /**
     * Добавляет персонажа в команду
     * @param {Character} character - объект персонажа
     * @throws {Error} если персонаж уже есть в команде
     */
    add(character) {
        // Проверка типа
        if (!(character instanceof Character)) {
            throw new Error('Можно добавлять только объекты класса Character');
        }

        // Проверка на дубликат
        if (this.members.has(character)) {
            throw new Error('Этот персонаж уже добавлен');
        }

        this.members.add(character);
    }

    /**
     * Добавляет несколько персонажей в команду
     * @param {...Character} characters - объекты персонажей
     */
    addAll(...characters) {
        characters.forEach(character => {
            if (!(character instanceof Character)) {
                throw new Error('Можно добавлять только объекты класса Character');
            }
            try {
                this.add(character);
            } catch (error) {

                // Для дубликатов просто пропускаем
            }
        });
    }

    /**
     * Конвертирует Set в массив
     * @returns {Array} массив персонажей
     */
    toArray() {
        return Array.from(this.members);
    }

    /**
     * Очищает команду
     */
    clear() {
        this.members.clear();
    }

    /**
     * Возвращает количество персонажей в команде
     * @returns {number}
     */
    size() {
        return this.members.size;
    }

    /**
     * Проверяет, есть ли персонаж в команде
     * @param {Character} character
     * @returns {boolean}
     */
    has(character) {
        return this.members.has(character);
    }
}