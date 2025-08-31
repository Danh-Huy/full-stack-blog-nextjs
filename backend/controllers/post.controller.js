import Post from '../models/post.model.js'; // Assuming you have a post model

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const slug = req.params.slug;
  const post = await Post.findOne({ slug });
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(post);
};

const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  const savedPost = await newPost.save();
  res.status(201).json(savedPost);
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedPost) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Post.findByIdAndDelete(id);
  if (!deletedPost) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json({ message: "Post deleted successfully" });
};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };