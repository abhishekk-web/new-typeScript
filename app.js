var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
buttonElement.addEventListener('click', function () {
    var num1 = number1.value;
    var num2 = number2.value;
    var result = add(+num1, +num2);
    var stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
});
console.log(add(1, 6));
