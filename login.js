function login() {
    let username = document.getElementById("user_name").value;
    let password = document.getElementById("password").value;
    let data = JSON.parse(localStorage.getItem("forlogin"))
    // console.log(data[0].password)
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].user_name)



        if (data[i].user_name == username) {
            console.log(data[i].user_name)
            if (data[i].password == password) {
                console.log(data[i].password)
                alert("loging successfull")
                window.location.href="index.html"
            }
            else{
                alert("wrong password") 
            }
        }
    }


}