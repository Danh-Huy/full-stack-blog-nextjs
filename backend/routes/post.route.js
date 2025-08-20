import express from 'express';

const router = express.Router();

router.get("/anothertest", (req, res) => {
  res.status(200).send("Post route test!")
})

export default router;