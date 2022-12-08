/*
    Task 1:

    Необходимо создать информацию о себе, используя переменные, в которых будет:
    -ваше имя,
    -ваш возраст,  
    -поле с вашим статусом о семейном положении, замужем/женаты (Либо истина , либо ложь)
    -по аналогии с предыдущим, поле с детьми

    Также необходимо определить тип данных всех ваших полей и вывести результат в консоль
*/
let name = 'Irina';
let age = 150;
let merid = true;
let kids = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof merid);
console.log(typeof kids);

/* 
    Task 2:

    Напишите скрипт, который находит площадь прямоугольника

    -высота 23см,
    -шириной 10см

    Каждая сущность должна находиться в своей переменной
*/

let hight = 23;
let width = 10;

let area = hight * width

console.log(area)

/*
    Task 3:

    Напиши скрипт, который находит объем цилиндра
    
    -высота 10м  
    -площадь основания 4м

    Каждая сущность должна находиться в своей переменной
*/

let cylinderHight = 10;
let cylinderArea = 4;

let result = cylinderArea * cylinderHight;

console.log(result)

/*
    Task 4:

    Напиши рядом с каждым выражением , тот ответ который по вашему мнению выведет console.
    И потом сравните ваш результат с тем что на самом деле вывела консоль.
    
    Infinity - "1"  Infinity
    "42" + 42    84
    2 + "1 1"   3 1
    99 + 101    200
    "1" - "1"    0
    "Result: " + 10/2   Result - 5
    3 + " bananas " + 2 + " apples "   3 bananas 2 apples

*/

console.log(Infinity - "1");
console.log("42" + 42);
console.log(typeof 2 + "1 1");
console.log(99 + 101);
console.log("1" - "1");
console.log("Result: " + 10/2);
console.log(3 + " bananas " + 2 + " apples ");