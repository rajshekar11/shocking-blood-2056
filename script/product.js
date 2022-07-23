let main=document.getElementById("main");
    let url="http://127.0.0.1:3000/api/products";
    let getdata=async()=>{
let res=await fetch(url);
let data=await res.json();
console.log(data);
append(data,main);
    }
    getdata();
    let data=[
      {
          "h1":"Impact Analysis",
          "paragraph":"Impact Analysis takes runtime information from an application’s production environment and provides this information contextually in the Codecov dashboard and in the Codecov pull request comment.",
          "img":"https://about.codecov.io/wp-content/uploads/2022/06/0622_ProjectInsights.jpg"
    
      },{
          "h1":"Source Code Coverage",
          "paragraph":"Codecov highlights which portions of your code that have not been properly tested or may require additional testing.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Source-Code-Coverage-1.png"
    
      },{
          "h1":"Multi Language, Multi CI/CD",
          "paragraph":"Our goal at Codecov is that it works for YOU right out of the box.Regardless of what languages or CI/CDs you use.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/CD.png"
    
      },{
          "h1":"Pull Request Comments",
          "paragraph":"Pull Request Comments allow you and your team to see coverage summaries directly in your workflow so that you can add and update tests quickly and effectively.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Pull-request-comments.png"
    
      },{
          "h1":"Status Checks",
          "paragraph":"Codecov status checks allow you to block underperforming pull requests from being merged based on thresholds you choose. If your goal is to maintain 85% coverage. ",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Status-Checks-1.png"
    
      },{
          "h1":"Badges",
          "paragraph":"A Codecov badge is a live icon that is displayed within your code host that gives you a glance into the status of your project’s percentage of code coverage.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Gthub-Badges.png"
    
      },{
          "h1":"Report Merging",
          "paragraph":"Codecov Report Merging creates a unified coverage report even if you set up your tests in multiple build systems, split up tests in different containers.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Report-Merging.png"
    
      },{
          "h1":"Flags",
          "paragraph":"Do you split your testing between your frontend and backend? Maybe collect coverage by project in a monorepository? You can isolate coverage information based on groupings using Codecov Flags.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Flags.png"
    
      },{
          "h1":"YAML",
          "paragraph":"Customize Codecov’s behavior with a developer friendly YAML file that can conform to even the most complex codebases and workflows.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/YAML.png"
    
      },{
          "h1":"Carryforward Flags",
          "paragraph":"Don’t run your entire test suite on every commit? Use Carryforward Flags to get consistent coverage metrics, even when you don’t upload all coverage reports.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Carryforward-flags.png"
    
      },{
          "h1":"GitHub Checks",
          "paragraph":"Want to see uncovered lines directly on a GitHub pull request? Our GitHub Checks feature shows you line-by-line coverage so you can stay in your workflow.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Checks-passed.png"
    
      },{
          "h1":"Notifications",
          "paragraph":"Get notified of coverage changes on Slack, Gitter, or any other IRC-compatible service.",
          "img":"https://about.codecov.io/wp-content/uploads/2020/10/Notifications.png"
    
      }
    
    
    ];

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
    append(data,main);
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