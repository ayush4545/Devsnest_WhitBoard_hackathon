// importing required components
const toggleBtn=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");

const sideBarfetch=document.querySelector(".sideBar-fetch")
const toolsBar=document.querySelector("aside")
const tools=document.querySelectorAll(".tools")
const cancel=document.querySelector(".cancel")
const canvasSection=document.querySelector("section")

const bgColorDiv=document.querySelectorAll(".container-4 div")
const colorInput=document.querySelector(".bg")
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
    tools.forEach((newTool)=>{
        newTool.classList.remove("active")
    })
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


console.log(colorInput)


bgColorDiv.forEach((color)=>{
    color.addEventListener("click",()=>{
        const c=color.getAttribute("class")
        console.log(c)

      canvasSection.style.backgroundColor=c
    })
})

colorInput.addEventListener("blur",()=>{
     console.log("clicked")
     console.log(colorInput.value)
     canvasSection.style.backgroundColor=colorInput.value
})


