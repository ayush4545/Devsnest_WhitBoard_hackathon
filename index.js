// importing required components
const toggleBtn=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");

const sideBarfetch=document.querySelector(".sideBar-fetch")
const toolsBar=document.querySelector("aside")
const tools=document.querySelectorAll(".tools")
const cancel=document.querySelector(".cancel")

toggleBtn.addEventListener("click",()=>{
    links.classList.toggle('show-links');
})

sideBarfetch.addEventListener("click",()=>{
    console.log("clicked")

    sideBarfetch.classList.add("hide")
    toolsBar.classList.add("show")
})
 
cancel.addEventListener("click",()=>{
    sideBarfetch.classList.remove("hide")
    toolsBar.classList.remove("show")
})
console.log(tools)

tools.forEach((tool)=>{
    tool.addEventListener("click",()=>{
         tools.forEach((newTool)=>{
             newTool.classList.remove("active")
         })
         if(!tool.classList.contains("active")){

             tool.classList.add("active")
         }
         
    })
})


