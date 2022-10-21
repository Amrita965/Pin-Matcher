function getPin() {
    const pin = generatePinNumber();
    if(pin.length == 4) {
        return pin;
    } else {
        return getPin()
    }
}

function generatePinNumber() {
    const randomNumber = Math.round(Math.random() * 10000) + '';
    return randomNumber;
}

function getInputFieldValueById(elementId) {
    return document.getElementById(elementId).value;
}

document.getElementById('generate-pin-btn').addEventListener('click', function(){
    const pinNumberField = document.getElementById('pin-number-field');
    pinNumberField.value = getPin();
});

document.getElementById('button-container').addEventListener('click', function(event){
    const inputField = document.getElementById('input-pin-number-field');
    if(isNaN(event.target.innerText)) {
        if(event.target.innerText === 'C') {
            inputField.value = "";
            return;
        }
        else if(event.target.innerText === '<') {
            inputField.value = inputField.value.slice(0, -1);
        }
    }
    else {
        inputField.value = inputField.value+event.target.innerText;
    }
    
});



document.getElementById('verify-pin').addEventListener('click', function(){
    const pinNumberFieldValue = getInputFieldValueById('pin-number-field');
    const verifyPinNumber = getInputFieldValueById('input-pin-number-field');
    const correctPinElement = document.getElementById('correct-pin');
    const incorrectPinElement = document.getElementById('incorrect-pin');
    if(pinNumberFieldValue === verifyPinNumber) {
        correctPinElement.style.display = 'block';
        incorrectPinElement.style.display = 'none';
    } else {
        incorrectPinElement.style.display = 'block';
        correctPinElement.style.display = 'none';
    }

});