let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

document.addEventListener('DOMContentLoaded',function(){
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(function(button){
        button.addEventListener('click',);
    });
});

function handleButtonClick(event){
    const value = event.target.textContent;

    if(value === 'C'){

    } else if(value === '='){

    }else if(['+','-','*','/'].inclubes(value)){

    }else {

    }
}

function updateDisplsy(){
    if(currentInput !== ''){
        display.value = currentInput;
    } else if (previousInput !== ''){
        display.value = previousInput + ' ' + currentOperator;
    } else {
        display.value = '';
    }
}
