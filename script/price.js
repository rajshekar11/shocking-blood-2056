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

//  faq section


let plussToMinus = document.querySelectorAll(".faq-plus")
    // console.log(plus)

    let convertToMinus = (el) =>{

if(el.innerText=="+"){
  el.innerText ="-"
  
  
  // que.forEach( (elem)=>{
  //     queToAns(elem)
    
  //   console.log(elem)
  // })
}
else{
  el.innerText = "+"
}
    }
   $(".faq-plus").on('click',function(){
        $(this).parent().parent().find('.faq-body').slideToggle();
        
      });

      plussToMinus.forEach( (el)=>{
  el.addEventListener("click",function(){
    convertToMinus(el)

  })
  console.log(el)
})