module.exports = () => {
  require("dotenv").config();
  const express = require("express");
  const cors = require("cors");
  const app = express();
  const moment = require("moment");
  const time = moment().format();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();

  const port = process.env.PORT || 3000;

  app.use(cors());

  app.get("/", async (req, res) => {
    const allPost = await prisma.post.findMany();

    if (allPost.length == 0) {
      msg = "Post table is empty";
    } else {
      msg = "Successfully retrieved all Post";
    }
    res.send(allPost);
  });

  app.get("/p/:id", async (req, res) => {
    const id = Number(req.params.id);
    const post = await prisma.post.findUnique({
      where: { id: id },
    });

    res.send(post);
  });

  app.get("/p/new", (req, res) => {
    res.send("ฟอร์มว่าง");
  });

  app.post("/p/new", async (req, res) => {
    const { title, from, content, createdAt } = req.body ?? {};
    if (!title || !from || !content) {
      res.send("ฟอร์มไม่ครบ");
    }
    const newPost = await prisma.post.create({
      data: {
        title: title,
        from: from,
        content: content,
        createdAt: time,
      },
    });

    res.send(newPost);
  });

  //   app.get("/", (req, res) => {
  //     console.log(req.query);
  //     const { q, sortBy } = req.query;
  //     res.send(`Hello World! q=${q}, sortBy=${sortBy}`);
  //   });

  app.listen(port, () => {
    console.log(`welcome to http://localhost:${port}/`);
  });
};
