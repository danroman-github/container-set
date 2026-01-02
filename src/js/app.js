import {func, num} from './one';
import example from '../../../example.json';

func();
console.log(num);
console.log(example);
const main = document.querySelector('.main');
main.textContent = 'Я текст из файла app.js';