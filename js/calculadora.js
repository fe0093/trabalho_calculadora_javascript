var equalPress = 0;

function addValues(inputValues) {
    var textBox = document.getElementById("inputString");

    if (inputValues == 'answer') {
        validate(textBox.value);
        window.equalPress = 1;
    }
    else if (equalPress == 1) {
        clearValues();
        window.equalPress = 0;
        textBox.value += inputValues;
    }
    else {
        textBox.value += inputValues;
    }

}

function calculateAnswer(equation) {
    var answer = eval(equation);
    var textBox = document.getElementById("inputString");
    textBox.value = answer;
}

function validate(equation) {
    calculateAnswer(equation);
}

function clearValues() {
    var textBox = document.getElementById("inputString");
    textBox.value = '';
}