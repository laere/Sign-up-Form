const password = document.getElementById("password");
const passwordInputWrapper = document.getElementById("password-input-wrapper");
const confirmPassword = document.getElementById("confirm-password") 
const button = document.querySelector(".create-account-btn");
let errorElement = document.createElement("span");

let currentPass;
let currentConfirmPass;

function passwordComparison(currentPass, confirmPassword) {
    // debugger;

    if (passwordInputWrapper.contains(errorElement)) {
        passwordInputWrapper.removeChild(errorElement);
    }
    //If confirm password is empty
    //If passwords do not match
    if (currentPass !== confirmPassword) {
        passwordInputWrapper.appendChild(errorElement);
        errorElement.className = "error";
        errorElement.textContent = "*Passwords must match!"
    } 
}

password.addEventListener("input", e => {
    currentPass = password.value;
})

confirmPassword.addEventListener("input", e => {
    currentConfirmPass = confirmPassword.value;
})

button.addEventListener("click", e => {
    passwordComparison(currentPass, currentConfirmPass);
})