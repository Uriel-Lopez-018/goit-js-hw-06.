const loginFrom = document.querySelector(".login-form")

loginFrom.addEventListener("submit", function (event){
    event.preventDefault();

    const email = loginFrom.elements.email.value

    const password = loginFrom.elements.password.value

    if(!email || !password) {

        alert("Todos los campos deben ser completados")
    }else{
        const useraDaata ={
            email:email,
            password:password
        }

        console.log(useraDaata)
        loginFrom.reset()
    }


})
