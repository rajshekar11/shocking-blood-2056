function singup() {

    class signupdata {
        constructor() {
            this.name = document.getElementById("name").value;
            this.mob = document.getElementById("mob").value
            this.user_name = document.getElementById("user_sin").value
            this.password = document.getElementById("pass_sin").value;
        }
    }
    // console.log(singup)
    let sing = new signupdata()
    console.log(sing)

    let data = JSON.parse(localStorage.getItem("forlogin")) || []
    data.push(sing)
    console.log(data)
    localStorage.setItem("forlogin", JSON.stringify(data))
    alert("signup successfully")

}