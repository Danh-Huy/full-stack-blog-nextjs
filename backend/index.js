import express from "express"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import commentRoutes from "./routes/comment.route.js"
import connectDB from "./lib/connectDB.js"

const app = express()

app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)

app.listen(3000, () => {
    connectDB()
  console.log("Server is running on port 3000")
})