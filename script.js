function checkLogin() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if (username == "admin" && password == "password") {
        alert("Login successful");
        window.location.href = "success.html";
    }
    else {
        alert("Invalid username or password");
    }
}
