const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=! ";

function generate(event) {
    event.preventDefault();

    const form = document.getElementById("passwordForm");
    const length = parseInt(form.length.value);
    const includeNumbers = form.includeNumbers.checked;
    const includeSymbols = form.includeSymbols.checked;

    if (length < 8) {
        alert("Password length should be at least 8 characters.");
        return;
    }

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

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
