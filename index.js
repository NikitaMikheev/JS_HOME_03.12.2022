// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
function getArrayLengthStrings(array){
    let arrayStringLength = array.map(index => index.length)
    return arrayStringLength;
}

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
function currentSums(numbers){
    let arraySumm = [];
    numbers.reduce((accum, current, i) => {
        return arraySumm[i]=accum+current;
    }, 0)

    return arraySumm;
}

currentSums([2, 3, 5, 7, 11, 13, 17, 19])
// 3. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
function getFirstLettersOfWords(str) {
    let strArray = str.split([' ']);
    strArray = strArray.filter((item) => item!=='');
    let newArray = []
    strArray.reduce((accum, current, i) => {
        return newArray[i]=current[0];
    }, -1)

    return newArray;
}
getFirstLettersOfWords("который будет состоять из первых букв")
// 4. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений
function sortByDesk(array) {
    array.sort(function(a, b) { return b - a; });
    return array;
}

sortByDesk([5,-2,-5,3,5,4,10,0]);
// 5. Напишите код, объединяющий любое количество массивов цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
function concatArrayAndSortByDesk(...array) {
    array=array.flat();
    arrayN=array.sort(function(a, b) { return b - a; });
    let arrayNew = [];

    for (let i = 0; i < arrayN.length; i++) {
        arrayNew.push(arrayN[i]);
        if (i<arrayN.length-1) {
            arrayNew.push(' ')
        }
    }
    return arrayNew;
}

let arr1 = [3,1,0,-20,2]
let arr2 = [3,2,0,-20,2]
let arr3 = [0,10,0,-20,2]

console.log(concatArrayAndSortByDesk(arr1,arr2,arr3));
// 6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
function deepArraySum(array) {
    array=array.flat(Infinity);
    let summ = array.reduce((accum, current) => {
        return accum+current;
    }, 0)

    return summ;
}

deepArraySum([[1, 2, 3], [4, 5], [6]])
// 7. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
function reverseArray(array) {
    let reverse = [];
    for (let i = 0; i < array.length; i++) {
        reverse.unshift(array[i])   
    }

    return reverse;
}

reverseArray([1, 2, 3]); 
// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше number.
function getCountElementForSumMoreNumber(array, number) {
    let summ = 0;
    let index = 0;
    for (; summ <= number; index++) {
        summ+=array[index];
    }

    return index;
}

getCountElementForSumMoreNumber([1, 2, 3, 4, 5, 6], 10)
// 9. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(placeholder, count) {
    let array = [];
    for (let i = 0; i<count; i++) {
        array.push(placeholder)
    }

    return array;
}
module.exports = {
    reverseArray,
    arrayFill,
    concatArrayAndSortByDesk,
    getCountElementForSumMoreNumber,
    deepArraySum,
    sortByDesk,
    getFirstLettersOfWords,
    currentSums,
    getArrayLengthStrings,
};
