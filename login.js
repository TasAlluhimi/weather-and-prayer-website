console.log('hi');

let log_btn = document.getElementById("login")
let username_inp = document.getElementById("username")
let pass_inp = document.getElementById("psw")

log_btn.addEventListener("click", () => {
    let username = username_inp.value
    let pass = pass_inp.value

    fetch('https://655239d55c69a7790329ba98.mockapi.io/BooksUsers',{method:'GET'})
    .then(res=>res.json())
    .then(data =>{
        data.find((data)=>{
            let validate_user = username === data.username && pass === data.password
            if(validate_user){
                localStorage.setItem("username", username)
                localStorage.setItem("isLogin", true)
                window.location.href = 'prayerTime.html';
            }
        })
    })
    .catch(err => console.error('error ', err))
})
