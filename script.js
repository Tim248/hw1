var UserAge = +prompt('Введите свой возраст : ');

if (UserAge <= 18) {
    alert('Вы еще молоды. Вам нужно учится !');
}
else if (UserAge <= 50) {
    alert('Вам нужно работать !');
}
else if (UserAge <= 59) {
    alert('Вам скоро на пенсию !');
}
else if (UserAge <= 150) {
    alert('Вы пенсионер !');
}
else {
    alert('Поздравляем вы не человек !)');
}