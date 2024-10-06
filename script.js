function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

 function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLast() {
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}


