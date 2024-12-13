let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "Images/eye-open.png";
    } else {
        password.type = "password";
        eyeIcon.src = "Images/eye-close.png";
    }
});
