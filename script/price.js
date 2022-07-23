
 let annual = document.querySelector("#annual")
 let monthly = document.querySelector("#monthly")


 let annually = ()=>{
    document.querySelector("#price").innerText = "$10/user/month";
   annual.style.border =" 1px solid rgb(225, 16, 148)";
   monthly.style.border = "none";


 }

 let month = ()=>{
    document.querySelector("#price").innerText = "$12/user/month";
   monthly.style.border =" 1px solid rgb(225, 16, 148)";
   annual.style.border = "none";

 }
 annual.addEventListener("click",annually)
 monthly.addEventListener("click",month)
