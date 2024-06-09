var colorButton= document.getElementById("changing-colors")
colorButton.addEventListener("click",function(event){
var colors= event.target.getAttribute("data-color")
if (colors=="light"){
    document.body.classList="light"
    event.target.setAttribute("data-color","dark")
    event.target.textContent="light"
}
else{
    document.body.classList="dark"
    event.target.setAttribute("data-color","light")
    event.target.textContent="dark"
}
})
