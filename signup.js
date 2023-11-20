console.log('hi');

let signup_btn = document.getElementById("signup")
let naame_inp = document.getElementById("name")
let username_inp = document.getElementById("username")
let email_inp = document.getElementById("email")
let pass_inp = document.getElementById("psw")
let error_message = document.getElementById("error-message")
let check_username = /^[A-Z]+[a-z]$/;
let check_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

signup_btn.addEventListener("click", () => {
    let naame = naame_inp.value
    let username = username_inp.value
    let email = email_inp.value
    let pass = pass_inp.value

    if (naame < 3) {
        error_message.innerText = 'Name should be more than 3 letters'
    } 
    // else if (!check_username.test(username)) {
    //     error_message.innerText = 'Username should contain at least 1 capital letter'
    // } 
    else if (!check_email.test(email)) {
        error_message.innerText = 'enter a vaild email'
    } 
    else if (pass < 4) {
        error_message.innerText = 'password must be more than 4 letters'
    } else {
        fetch('https://655239d55c69a7790329ba98.mockapi.io/BooksUsers', {
            method: 'POST',
            body: JSON.stringify({
                name: naame,
                username,
                email,
                password: pass,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("username", username)
            localStorage.setItem("isLogin", true)
            window.location.href = 'login.html';
        }
        )
        .catch(error => console.error('The error is: ', error))
    }
})