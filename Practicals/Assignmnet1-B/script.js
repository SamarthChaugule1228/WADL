function sendData() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "output.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        if (xhr.status == 200) {

            // Store as object
            let user = {
                name: name,
                email: email,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(user));

            window.location.href = "display.html";
        }
    };

    xhr.send(
        "name=" + name +
        "&email=" + email +
        "&password=" + password
    );
}