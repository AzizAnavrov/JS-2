// Задание 1

/* var age = +prompt('Введите свой возраст')

if(age > 0 || age <= 18) {
    alert('Вы еще молоды, вам надо учиться')
}

if(age > 18 || age <= 50) {
    alert('Вам нужно работать')
}

if(age > 50 || age <= 59) {
    alert('Вам скоро на пенсю')
}

if(age > 59 || age <= 100) {
    alert('Вы пенсионер')
}else {
    'Что-то пошло не так'
} */


// Задание 2

/* var time =+prompt('Введите время')
switch(time) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    alert(time + ' часа ночи')
    break
}

switch(time) {
    case 7:
    case 8:
    case 9:
    case 10:
    alert(time + ' часов утра')
    break
}

switch(time) {
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    alert(time + ' часов дня')
    break
}

switch(time) {
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    alert(time + ' часов вечера')
    break
} */


// Задание 3

var num1 =+prompt('Введите первое  число')
var num2 =+prompt('Введите второе число')
var num3 =+prompt('Введите третье число')

if(num1 > num2 && num1 < num3 || num1 > num2 && num1 > num3)
alert(num1);
else if(num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3)
alert(num2)
else {
    alert(num3)
}