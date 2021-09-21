const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check");
const outputBox = document.querySelector("#output-box");

function checkValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.value = "Your Birthday is lucky";
    } else {
        outputBox.value = "Your Birthday is not lucky";
    }
}

function checkNumberIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob) {
        debugger
        checkValues(sum, luckyNumber.value);
    } else {
        outputBox.value = "Please enter into Both fields";
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener("click", checkNumberIsLucky);
