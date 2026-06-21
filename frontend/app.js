fetch("http://localhost:5000/api/posts")
.then(res=>res.json())
.then(data=>{

 let output="";

 data.forEach(post=>{
  output+=`
   <div class="post">
   <h2>${post.title}</h2>
   <p>${post.content}</p>
   </div>
  `;
 });

 document.getElementById("posts").innerHTML=
 output;
});
