const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const includeNumbersCheckbox = document.getElementById("includeNumbers");
const includeSymbolsCheckbox = document.getElementById("includeSymbols");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=! ";


function generate(){
    const length = parseInt(lengthInput.value);
    const includeNumbers = includeNumbersCheckbox.checked;
    const includeSymbols = includeSymbolsCheckbox.checked;
    let allChars = upperCase + lowerCase;
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if (includeNumbers) {
        allChars += numbers;
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }

    if (includeSymbols) {
        allChars += symbols;
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
  }