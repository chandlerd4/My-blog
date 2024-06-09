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
var formEntry=document.getElementById("form-entry")
formEntry.addEventListener("submit", function(event){
    event.preventDefault()
    var blogList= JSON.parse(localStorage.getItem("personalBlog")) || []
    var userData= {
        title:document.getElementById("title").value,
        description:document.getElementById("description").value,
        username:document.getElementById("username").value
    }
    blogList.push(userData)
    console.log(blogList)
    localStorage.setItem("personalBlog",JSON.stringify(blogList))
})