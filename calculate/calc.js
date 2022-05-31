let select = document.querySelector('select');
let options = document.querySelector('option');
let button = document.querySelector('button');
let input1 = document.querySelector('.num1');
let input2 = document.querySelector('.num2');

let num1;
let num2;
let result;
let number1;
let number2;

input1.addEventListener('input', ({target}) => {
    num1 = target.value
})
input2.addEventListener('input', ({target}) => {
    num2 = target.value
})
select.addEventListener('input', ({target}) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        number1 = parseInt(num1);
        number2 = parseInt(num2);
    switch(target.value){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('default');
            break;
        }
        console.log(result);
    })
})



