const router = require("express").Router();

const Comment = require("../models/Comment");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

// ===========================
// Get Comments of a Post
// ===========================

router.get("/:postId", async (req, res) => {

    try {

        const comments = await Comment.find({
            postId: req.params.postId
        }).sort({
            createdAt: -1
        });

        res.status(200).json(comments);

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// ===========================
// Add Comment
// ===========================

router.post("/", auth, async (req, res) => {

    try {

        const { postId, comment } = req.body;

        if (!postId || !comment) {

            return res.status(400).json({
                message: "Comment cannot be empty"
            });

        }

        const post = await Post.findById(postId);

        if (!post) {

            return res.status(404).json({
                message: "Post Not Found"
            });

        }

        const newComment = new Comment({

            postId,

            userId: req.user.id,

            username: req.user.username,

            comment

        });

        await newComment.save();

        res.status(201).json({

            message: "Comment Added",

            comment: newComment

        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;
