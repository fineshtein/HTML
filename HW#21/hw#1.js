// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
   'one': 'number',
};

function resolve1() {
   let resolve1 = {};
   resolve1[firstObject.one] = Object.keys(firstObject)[0];
   return resolve1;   
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат {'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
   'apple': 'fruit',
   'potato': 'vegetable',
   'strawberry': 'berry',
};

function resolve2() {
   let keys = Object.keys(secondObject);
   let resolve2 = {};
   for (let i = 0; i < keys.length; i++) {
      resolve2[Object.values(secondObject)[i]] = Object.keys(secondObject)[i];
   }
   return resolve2;
};

const result2 = resolve2(secondObject);
console.log(result2);
console.log(secondObject);

// Не очень понятно: 1) зачем в условии задачи функция задана со значениями (inputObject)?   2) можно ли иначе присвоить значение ключа в новой функции?   3) как сделать 2ой уровень с помощью for...in    4) можно ли было сделать без открытия пустого объекта внутри функции resolve?   5) зачем нужна эта строка - const result1 = resolve1(firstObject);
