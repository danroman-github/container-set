import Team from '../js/team.js';
import Bowman from '../js/bowman.js';
import Swordsman from '../js/swordsman.js';
import Magician from '../js/magician.js';

console.log('=== Пример использования класса Team ===\n');

// Создаем персонажей
const bowman = new Bowman('Лучник');
const swordsman = new Swordsman('Мечник');
const magician = new Magician('Маг');

// Создаем команду
const fellowship = new Team();

console.log('1. Добавление персонажей по одному:');
try {
    fellowship.add(bowman);
    console.log('✓ Legolas добавлен');
    fellowship.add(swordsman);
    console.log('✓ Aragorn добавлен');
    fellowship.add(magician);
    console.log('✓ Gandalf добавлен');

    // Попытка добавить дубликат
    fellowship.add(bowman);
} catch (error) {
    console.log(`✗ Ошибка: ${error.message}`);
}

console.log(`\nРазмер команды: ${fellowship.size()}`);

console.log('\n2. Добавление нескольких персонажей сразу:');
const newMembers = [magician, new Bowman('Лучник2')];
fellowship.addAll(...newMembers);
console.log(`Добавлены персонажи (дубликаты проигнорированы)`);
console.log(`Размер команды: ${fellowship.size()}`);

console.log('\n3. Преобразование команды в массив:');
const teamArray = fellowship.toArray();
console.log('Команда как массив:');
teamArray.forEach((member, index) => {
    console.log(`${index + 1}. ${member.name} (${member.type})`);
});