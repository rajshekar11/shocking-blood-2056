let main=document.getElementById("main");
    let url="http://127.0.0.1:3000/api/products";
    let getdata=async()=>{
let res=await fetch(url);
let data=await res.json();
console.log(data);
append(data,main);
    }
    getdata();
   
    
    let append=(data,main)=>{
data.forEach((ele,index) => {
    let div1=document.createElement("div");
    let divsub=document.createElement("div");
    let divsub1=document.createElement("div");
    let h1=document.createElement("h2");
    let paragraph=document.createElement("p");
    let learn=document.createElement("h4");
    learn.style.cursor="pointer";
    let img=document.createElement("img");
  
    
    if(index%2===0){
        h1.innerText=ele.h1;
   paragraph.innerText=ele.paragraph;
  img.src=ele.img;

  
  learn.innerText="Learn More"
  
  learn.style.color="#b0003a";
  learn.addEventListener("click",()=>{
    window.location.href="https://about.codecov.io/product/feature/impact-analysis/";
  });
   divsub.append(h1,paragraph,learn);
   divsub1.append(img);
div1.append(divsub,divsub1);
   main.append(div1);
    }else{
         
    h1.innerText=ele.h1;
   
   paragraph.innerText=ele.paragraph;
  
   img.src=ele.img;
   learn.innerText="Learn More"
   learn.style.color="#b0003a";
   learn.addEventListener("click",()=>{
    window.location.href="https://about.codecov.io/product/feature/source-code-coverage/";
   })
   divsub.append(img);
   divsub1.append(h1,paragraph,learn);
  
   div1.append(divsub,divsub1);
   main.append(div1);
    }
    
    
  
});
    }
    let clickgit=()=>{
    window.location.href="https://app.codecov.io/login/gh?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2Fproduct%2Ffeatures%2F";
 }
 let clicklab=()=>{
    window.location.href="https://app.codecov.io/login/gl?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2Fproduct%2Ffeatures%2F";
 }
 let clickbit=()=>{
    window.location.href="https://app.codecov.io/login/bb?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2Fproduct%2Ffeatures%2F";
 }
 let git=document.getElementById("hub");
 let lab=document.getElementById("lab");
 let bit=document.getElementById("bit");
 git.style.cursor="pointer";
 lab.style.cursor="pointer";
 bit.style.cursor="pointer";
 git.addEventListener("click",clickgit);
 lab.addEventListener("click",clicklab);
bit.addEventListener("click",clickbit);
term=()=>{
        window.location.href="https://about.codecov.io/terms-and-conditions/";
      }
      privacy=()=>{
        window.location.href="https://about.codecov.io/privacy/";
      }
      sec=()=>{
        window.location.href="https://about.codecov.io/security/";
      }
      eula=()=>{
        window.location.href="https://about.codecov.io/eula/";
      }
      gdpr=()=>{
        window.location.href="https://about.codecov.io/gdpr/";
      }