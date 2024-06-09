var formEntry=document.getElementById("form-entry")
formEntry.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("unsubmit")
    var blogList= JSON.parse(localStorage.getItem("personalBlog")) || []
    var userData= {
        title:document.getElementById("title").value,
        description:document.getElementById("description").value,
        username:document.getElementById("username").value
    }
    blogList.push(userData)
    console.log(blogList)
    localStorage.setItem("personalBlog",JSON.stringify(blogList))
    location.href="./blog.html"
})