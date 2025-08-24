import express from 'express';
import Post from '../models/post.model.js'; // Assuming you have a post model
import {getAllPosts, getPostById, createPost, deletePost, updatePost} from '../controllers/post.controller.js';

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:slug", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;