let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign in";
    signupBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}