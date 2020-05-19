// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year2); // 17.

function centuryFromYear(x) {
   if (x % 100 == 0) {
      return Math.round(x/100);
   } else {
      return Math.round(x/100+1);
   }
}

console.log(centuryFromYear(year));
console.log(centuryFromYear(year2));