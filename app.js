const openButton = document.querySelectorAll(".show-modal")

const modal =document.querySelector(".modal")
const hidden =document.querySelector(".hidden")
const overlay =document.querySelector(".overlay")

const closeButton = document.querySelector(".close-modal")


const openMyModel = () =>{
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")

}

for( let i=0 ; i < openButton.length; i++){
    openButton[i].addEventListener("click", openMyModel )}





const closeMyModel = () =>{
    modal.classList.add("hidden")
    overlay.classList.add("hidden")

}

closeButton.addEventListener("click", closeMyModel)

overlay.addEventListener("click", closeMyModel)

document.addEventListener("keydown", 
function(e){
    
   if(e.key==="Escape"){
       if(!modal.classList.contains("hidden")){
           closeMyModel()
       }
   }

})