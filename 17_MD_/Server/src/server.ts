import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";

import mysql from "mysql2";
import { error } from "console";
import multer from "multer";

// TODO input verification!!!!
type Post = {
  id: number;
  title: string;
  content: string;
  image: File;
};

type PostBody = {
  title: string;
  content: string;
  image: File;
};
type CommentBody = {
  author: string;
  content: string;
  image_link: string;
  post_id: number;
};

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));
app.use("/static", express.static("public"));

app.listen(3005, () => {
  console.log("Application started on port 3005!");
});

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "blog",
});

//Getting all posts from DB
app.get("/posts", (req: Request, res: Response) => {
  connection.query("SELECT * FROM posts", (err, result: Post[], fields) => {
    if (err) throw err;
    res.send(result);
  });
});

//Getting single post from DB
app.get(`/posts/:id`, (req: Request, res: Response) => {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM posts WHERE id = ${id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.send(result[0]);
    }
  );
});

//Edit post
app.put(`/editpost/:id`, (req: Request<any, null, PostBody>, res: Response) => {
  const id: number = req.params.id;
  const newTitle = req.body.title;
  const newContent = req.body.content;

  connection.query(
    `UPDATE posts SET content = '${newContent}', title = '${newTitle}'  WHERE id = ${id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.send({ success: true });
    }
  );
});
//-------------------------------
// ADD New POST including post image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post(
  `/new/`,
  upload.single("image"),
  (req: Request<any, null, PostBody>, res: Response) => {
    const newTitle = req.body.title;
    const newContent = req.body.content;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const imagePath = `http://localhost:3005/static/${req.file.filename}`;
    console.log(imagePath);

    connection.query(
      `INSERT INTO posts (title,content, image_link) VALUES ('${newTitle}','${newContent}', '${imagePath}')`,
      function (err, data, result) {
        if (err) throw err;
        res.send(result);
      }
    );
  }
);

//WORKING WITH COMMENTS------------------------------------

//Getting post comments
app.get(`/posts/:id/comments`, (req: Request, res: Response) => {
  const id = req.params.id;

  connection.query(
    `SELECT * FROM comments WHERE post_id = ${id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Add new comment to DB
//TODO  get rid of ANY
app.post(
  `/posts/newcoment/:id`,
  (req: Request<any, null, CommentBody>, res: Response) => {
    const post_id: string = req.params.id;
    const image_link = req.body.image_link;
    const author = req.body.author;
    const content = req.body.content;

    connection.query(
      `INSERT INTO comments (author,content,image_link,post_id) VALUES ('${author}','${content}', '${image_link}', ${post_id})`,
      function (err, data) {
        if (err) throw err;
        res.send({ success: true });
      }
    );
  }
);

//Delete comment from DB
app.delete(`/comments/:id/`, (req: Request, res: Response) => {
  const id = req.params.id;

  connection.query(
    `DELETE FROM comments WHERE id = ${id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.send({ success: true });
    }
  );
});
