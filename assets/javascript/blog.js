var blogList= JSON.parse(localStorage.getItem("personalBlog")) || []
var blogPost= document.getElementById("blog-post")
var htmlCode=""
for(var i=0; i< blogList.length;i++){
    htmlCode+= `<div class="card">
    <div class="card-body">
      <h2> ${blogList[i].title}</h2>
      <h3> username: ${blogList[i].username}</h3>
      <p> ${blogList[i].description}</p>
    </div>
  </div>`
}
blogPost.innerHTML=htmlCode