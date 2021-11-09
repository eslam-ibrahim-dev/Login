var emailAddress = document.getElementById("emailAddress");
var userName = document.getElementById("userName");
var Password = document.getElementById("Password");
var alert_email = document.getElementById("alert-email");
var alert_user = document.getElementById("alert-username");
var alert_password = document.getElementById("alert-password");
var login = document.getElementById("loginPage");
var btn = document.getElementById("btn");
var registerBtn = document.getElementById("registerBtn");
var container = document.getElementsByClassName("container");
var registerLogin = document.getElementById("registerLogin");
var loginUser = document.getElementById("loginUser");
var loginPass = document.getElementById("loginPass");
var hello = document.getElementById("hello");
var tryAgain = document.getElementById("tryAgain");
var User = [];

/////////////////////////Return the data//////////////////////////////////////////
if (localStorage.getItem("allUsers") != null) {
    User = JSON.parse(localStorage.getItem("allUsers"));
}



///////////////////////register the data and save it //////////////////////////////////
for (var i = 0; i < container.length; i++) {
    if (container[i].classList.contains("sign")) {
        registerBtn.addEventListener("click", function () {
            if (vaildationPassword() == true && vaildationEmail() == true && vaildationUser() == true) {
                var singleUser = {
                    email: emailAddress.value,
                    user: userName.value,
                    pass: Password.value
                }
                User.push(singleUser);
                localStorage.setItem("allUsers", JSON.stringify(User));
                registerBtn.setAttribute("href", "index.html");
                clearInputs();
            }
        })

    }
}

//////////////////////////////Login Page////////////////////////////////
for (var i = 0; i < container.length; i++) {
    if (container[i].classList.contains("login")) {
        registerLogin.addEventListener("click", function () {
            for (var u = 0; u < User.length; u++) {
                if (loginUser.value == User[u].user && loginPass.value == User[u].pass) {
                    registerLogin.setAttribute("href", "welcome.html");
                    tryAgain.classList.remove("d-block");
                    tryAgain.classList.add("d-none");
                }
                else {
                    tryAgain.classList.add("d-block");
                    tryAgain.classList.remove("d-none");
                }
            }
            // clearInputs();
        })
    }
}

///////////////////////Welcome///////////////////////////////
for (var i = 0; i < container.length; i++) {
    if (container[i].classList.contains("welcome")) {
        for (var u = 0; u < User.length; u++) {
            hello.innerHTML = "Welcome " + User[u].user;
        }

    }
}


///////////////////Clear the inputs//////////////////
function clearInputs() {
    emailAddress.value = '';
    userName.value = '';
    Password.value = '';
}




//************* Vaildation********** */
function vaildationEmail() {
    var regex = /^[\w-.]+@([\w-]+.)+[\w-]{3,}$/;

    if (regex.test(emailAddress.value) == true) {
        alert_email.classList.remove("d-block");
        alert_email.classList.add("d-none");
        return true;
    }
    else {
        alert_email.classList.add("d-block");
        alert_email.classList.remove("d-none");
        return false;
    }
}

function vaildationUser() {
    var regex = /^([A-Z])[\w]{4,}$/

    if (regex.test(userName.value) == true) {
        alert_user.classList.remove("d-block");
        alert_user.classList.add("d-none");
        return true;
    }
    else {
        alert_user.classList.add("d-block");
        alert_user.classList.remove("d-none");
        return false;
    }
}

function vaildationPassword() {
    var regex = /^[\w]{8,}$/

    if (regex.test(Password.value) == true) {
        alert_password.classList.remove("d-block");
        alert_password.classList.add("d-none");
        return true;
    }
    else {
        alert_password.classList.add("d-block");
        alert_password.classList.remove("d-none");
        return false;
    }
}