const loginButton = document.getElementById("loginButton");

function verifyLogin() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === "example@gmail.com" && password === "1234") {
     window.location.href = "./../../Client/Home.html";

    } else if(email === "admin@gmail.com" && password === "1234"){
     window.location.href = "./../../admin/Dashboard.html";
    }else{alert("invalid email or password")}
}

loginButton.addEventListener("click", verifyLogin);
