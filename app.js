// Pin Generate html selector
const pinGenerateBtn = document.querySelector('.generate-btn');
const pinGenerateInputBox = document.getElementById('pin-generate-input');
// keypad html selector
const allKeypadBtn = document.querySelector('.calc-body');
const keypadInputBox = document.getElementById('keypadInputBox');

// Pin generate button event handler
pinGenerateBtn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 9000 + 1000)
    pinGenerateInputBox.value = randomNumber;
});

// all keypad numbers event handler
allKeypadBtn.addEventListener('click', function (e) {
    const btn = e.target;
    if (btn.matches('.numberBtn') && keypadInputBox.value.length < 4) {
        keypadInputBox.value += btn.innerText;
    }
});

// clear button event handler
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function () {
    keypadInputBox.value = '';
});

//backspace button event handler
const backspaceBtn = document.getElementById('backspace');
backspaceBtn.addEventListener('click', function () {
    const currentValue = keypadInputBox.value;
    if (currentValue > 0) {
        keypadInputBox.value = keypadInputBox.value.slice(0, -1);
    } else {
        alert('there are have no number');
    }
});

// submit button event handler
const submitBtn = document.getElementById('submit-btn');
const success = document.querySelector('.success');
const wrong = document.querySelector('.wrong');

submitBtn.addEventListener('click', function () {
    let keypadNumber = keypadInputBox.value;
    let pinGenerateNumber = pinGenerateInputBox.value;

    if (pinGenerateNumber == '' || keypadNumber == '') {
        wrong.style.display = 'block';
        setTimeOut(wrong);
    }
    else if (keypadNumber === pinGenerateNumber) {
        success.style.display = 'block';
        setTimeOut(success);
    }
    else {
        wrong.style.display = 'block';
        setTimeOut(wrong);
    }
    keypadNumber = '';
});

function setTimeOut(idName) {
    setTimeout(function () {
        idName.style.display = 'none';
    }, 3000);
}
