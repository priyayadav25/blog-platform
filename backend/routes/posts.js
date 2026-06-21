const router=require("express").Router();
const Post=require("../models/Post");
const auth=require("../middleware/auth");

router.get("/",async(req,res)=>{
 const posts=await Post.find();
 res.json(posts);
});

router.post("/",auth,async(req,res)=>{
 const post=new Post(req.body);
 await post.save();
 res.json(post);
});

router.put("/:id",auth,async(req,res)=>{
 const post=await Post.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new:true}
 );
 res.json(post);
});

router.delete("/:id",auth,async(req,res)=>{
 await Post.findByIdAndDelete(req.params.id);
 res.json("Deleted");
});

module.exports=router;
