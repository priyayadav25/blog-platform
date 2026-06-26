const router = require("express").Router();

const Post = require("../models/Post");
const auth = require("../middleware/auth");

// ===========================
// Get All Posts
// ===========================
router.get("/", async (req, res) => {

    try {

        const posts = await Post.find().sort({
            createdAt: -1
        });

        res.status(200).json(posts);

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// ===========================
// Create Post
// ===========================
router.post("/", auth, async (req, res) => {

    try {

        const { title, content } = req.body;

        if (!title || !content) {

            return res.status(400).json({
                message: "Title and Content are required"
            });

        }

        const newPost = new Post({

            title,

            content,

            author: req.user.username,

            userId: req.user.id

        });

        await newPost.save();

        res.status(201).json({

            message: "Post Created Successfully",

            post: newPost

        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// ===========================
// Update Post
// ===========================
router.put("/:id", auth, async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {

            return res.status(404).json({
                message: "Post Not Found"
            });

        }

        if (post.userId.toString() !== req.user.id) {

            return res.status(403).json({
                message: "You can edit only your own posts"
            });

        }

        post.title = req.body.title;
        post.content = req.body.content;

        await post.save();

        res.status(200).json({

            message: "Post Updated Successfully",

            post

        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// ===========================
// Delete Post
// ===========================
router.delete("/:id", auth, async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {

            return res.status(404).json({
                message: "Post Not Found"
            });

        }

        if (post.userId.toString() !== req.user.id) {

            return res.status(403).json({
                message: "You can delete only your own posts"
            });

        }

        await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Post Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;
