const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("lucky-number");
const checkNumberButton = document.querySelector("#check");

function checkNumberIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
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
