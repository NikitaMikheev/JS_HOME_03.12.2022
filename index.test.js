const func = require('.');

test("1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.", () => {
  expect(func?.getArrayLengthStrings(['который','получает','из','массива','строк','новый','массив'])).toEqual([7,8,2,7,5,5,6]);
  expect(func?.getArrayLengthStrings([])).toEqual([]);
  expect(func?.getArrayLengthStrings(['привет', 'мир'])).toEqual([6, 3]);
});

test("2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.", () => {
  expect(func?.currentSums([2, 3, 5, 7, 11, 13, 17, 19])).toEqual([2,5,10,17,28,41,58,77]);
  expect(func?.currentSums([3,8,5])).toEqual([3,11,16]);
  expect(func?.currentSums([])).toEqual([]);
  expect(func?.currentSums([1])).toEqual([1]);
});

test("3. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.", () => {
  expect(func?.getFirstLettersOfWords("который будет состоять из первых букв")).toEqual(['к', 'б','с','и','п','б']);
  expect(func?.getFirstLettersOfWords("")).toEqual([]);
  expect(func?.getFirstLettersOfWords("  который   будет  ")).toEqual(['к', 'б']);
});

test("4. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений", () => {
  expect(func?.sortByDesk([5,-2,-5,3,5,4,10,0])).toEqual([10,5,5,4,3,0,-2,-5]);
  expect(func?.sortByDesk([])).toEqual([]);
  expect(func?.sortByDesk([1,2,3,4])).toEqual([4,3,2,1]);
});

test("5. Напишите код, объединяющий любое количество массивов цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.", () => {
  expect(func?.concatArrayAndSortByDesk([1,2],[3,4,5])).toEqual([5,' ',4,' ',3,' ',2,' ',1]);
  expect(func?.concatArrayAndSortByDesk([1,2],[3,4],[5])).toEqual([5,' ',4,' ',3,' ',2,' ',1]);
  expect(func?.concatArrayAndSortByDesk([1],[2],[3,4],[5])).toEqual([5,' ',4,' ',3,' ',2,' ',1]);
});

test("6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.", () => {
  expect(func?.deepArraySum([[1, 2, 3], [4, 5], [6]])).toBe(21);
  expect(func?.deepArraySum([[1, 2, 3], [4, 5]])).toBe(15);
  expect(func?.deepArraySum([[1, 2, 3]])).toBe(6);
});

test("7. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.", () => {
  expect(func?.reverseArray([1,2,3,4,5])).toEqual([5,4,3,2,1]);
  expect(func?.reverseArray([4,3,2,1])).toEqual([1,2,3,4]);
});

test("8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше number.", () => {
  expect(func?.getCountElementForSumMoreNumber([1,2,3,4,5,6,7], 10)).toBe(5);
  expect(func?.getCountElementForSumMoreNumber([1,2,3,4,5,6,7], 3)).toBe(3);
  expect(func?.getCountElementForSumMoreNumber([1,2,-3,4,5,6,7], 3)).toBe(4);
});

test("9. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].", () => {
  expect(func?.arrayFill('x', 3)).toEqual(['x','x','x']);
  expect(func?.arrayFill('Привет', 5)).toEqual(['Привет','Привет','Привет','Привет','Привет']);
});
