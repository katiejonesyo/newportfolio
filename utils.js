function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    var correctPassword = "KT2024"; // Replace with your desired password

    if (enteredPassword === correctPassword) {
        document.getElementById("password-form").style.display = "none";
        document.getElementById("authenticated-content").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-link-group');

    // Toggle the active class on click
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
