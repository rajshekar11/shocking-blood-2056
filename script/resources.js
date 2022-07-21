




var data =data=[
    {
        
    
       img : "https://about.codecov.io/wp-content/uploads/2022/07/0622_M36_TrackingCodeCoverage@3x-100-scaled.jpg",
       h4  : "Blog Post",
       h1  : "How to Know If Your Company Should Be Tracking Code Coverage",
       ig: "https://about.codecov.io/wp-content/uploads/2021/09/Codecov.svg",
       p   : " Piero Borrelli",
       btn : "Read Blog Post"
    },
    
    {
        
    
        img: "https://about.codecov.io/wp-content/uploads/2020/05/soc2-e1621885514940.png",
       h4  : "Blog Post",
       h1  : "SOC2 Type II Renewed with No Exceptions and SOC3 Awarded",
       ig: "https://about.codecov.io/wp-content/uploads/2021/05/gabriel-abreu-1.png",
       p   : " Gabriel Abreu",
       btn : "Read Blog Post"
    
    
    
    
    },
    
    {
        
    
        img : "	https://about.codecov.io/wp-content/uploads/2022/06/Screen-Shot-2022-07-20-at-2.22.39-PM.png",
       h4  : "ON-DEMAND WEBINAR",
       h1  : "Open Beta: Impact Analysis",
       ig: "",
       p   : "",
       btn : "Watch Webinar "
    
    },
    
    {
       
    
        img : "https://about.codecov.io/wp-content/uploads/2022/07/0622_M36_TrackingCodeCoverage@3x-100-scaled.jpg",
       h4  : "Blog Post",
       h1  : "Announcing Impact Analysis in Open Beta",
       ig: "https://about.codecov.io/wp-content/uploads/2021/05/eli-hooten-2.png",
       p   : " Eli Hooten",
       btn : "Read Blog Post"
    
    },
    
    {
        
    
        img : "https://about.codecov.io/wp-content/uploads/2022/06/0622_ProjectInsights.jpg",
       h4  : "WEBINAR",
       h1  : "Open Beta: Impact Analysis Webinar",
       ig: "",
       p   : "",
       btn : "Register for Webinar "
    
    },
    
    {
       
    
        img : "https://about.codecov.io/wp-content/uploads/2022/05/0522_MutationTesting@3x-100-scaled.jpg",
       h4  : "Blog Post",
       h1  : "Mutation Testing: How to Ensure Code Coverage Isn’t a Vanity Metric",
       ig: "https://about.codecov.io/wp-content/uploads/2022/05/dp_current.jpeg",
       p   : "Cameron Pavey",
       btn : "Read Blog Post"
    
    },
    
    {
        
    
        img : "https://about.codecov.io/wp-content/uploads/2022/05/TypeScript-1200x628@2x.png",
       h4  : "Blog Post",
       h1  : "Measuring Typescript Code Coverage with Jest and GitHub Actions",
       ig: "	https://about.codecov.io/wp-content/uploads/2022/05/mediashot.jpeg",
       p   : " Allan MacGregor",
       btn : "Read Blog Post"
    
    },
    
    {
        
    
        img : "https://about.codecov.io/wp-content/uploads/2021/0…ov-with-C-and-GitHub-Actions-4-e1623430205538.png",
       h4  : "Blog Post",
       h1  : "How to Set Up Codecov with C and GitHub Actions",
       ig: "https://about.codecov.io/wp-content/uploads/2021/04/1602422364613.jpeg",
       p   : "Aniket Bhattacharyea",
       btn : "Read Blog Post"
    
    },
    
    
    {
        
    
        img : "https://about.codecov.io/wp-content/uploads/2021/0…ov-with-C-and-GitHub-Actions-4-e1623430205538.png",
       h4  : "Blog Post",
       h1  : "Measuring PHP Code Coverage with PHPUnit and GitHub Actions",
       ig: "https://about.codecov.io/wp-content/uploads/2022/04/1516366211505.jpeg",
       p   : "Haafiz Waheeduddin Ahmad",
       btn : "Read Blog Post"
    
    },
    
    
    {
        
    
        img: "https://about.codecov.io/wp-content/uploads/2022/03/featured-image.png",
       h4  : "EBook",
       h1  : "What is Code Coverage?",
       ig: "",
       p   : " ",
       btn : "Read eBook"
    
    },
    
    {
        
    
        img : "	https://about.codecov.io/wp-content/uploads/2022/01/32_Four-day-work-week-01.png",
       h4  : "Blog Post",
       h1  : "At Codecov, Every Weekend is a 3 Day Weekend",
       ig: "https://about.codecov.io/wp-content/uploads/2021/05/jon-blumenfeld.png",
       p   : "Jon Blumenfeld",
       btn : "Read Blog Post"
    
    },
    
    {
       
    
        img : "https://about.codecov.io/wp-content/uploads/2022/07/0622_M36_TrackingCodeCoverage@3x-100-scaled.jpg",
       h4  : "Blog Post",
       h1  : "Announcing Impact Analysis in Open Beta",
       ig: "https://about.codecov.io/wp-content/uploads/2021/05/eli-hooten-2.png",
       p   : " Eli Hooten",
       btn : "Read Blog Post"
    
    },
    
    ]

    display(data)

    function display(data)
    {
        document.querySelector("#apper").innerHTML ="";
        data.forEach(element => {
        
        var box = document.createElement("div")

        var img = document.createElement("img")
        img.setAttribute("id","ming")
        img.src =element.img

        var h = document.createElement("h4")
        h.innerText = element.h4

        var h1 = document.createElement("h1")
        h1.innerText = element.h1

        var bimg = document.createElement("img")
        bimg.setAttribute("id","bimg")
        bimg.src = element.ig

        var pname = document.createElement("h1")
        pname.src = element.p

        var btn = document.createElement("h4")
        btn.innerText =element.btn
        



        box.append(img,h,h1,bimg,pname,btn)
        document.querySelector("#apper").append(box)
    });
    }