import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Animals",
});
//are we connected?
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

//get all animals
app.get("/animals", (req: Request, res: Response) => {
  con.query("SELECT * FROM animals", (error, result, fields) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });
});

// add new animal
app.post("/animals", (req: Request, res: Response) => {
  const name = req.body.name;
  const habitat = req.body.habitat;
  const imageUrl = req.body.imageUrl;

  con.query(
    `INSERT INTO animals (name, habitat, imageUrl) VALUES (?,?,?)`,
    [name, habitat, imageUrl],
    (error, result, fields) => {
      if (error) {
        res.send(error);
      }
      res.send(result);
    }
  );
});

//delete animal by id
app.delete("/animals/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  con.query(`DELETE FROM animals WHERE id =${id}`),
    (error, result, fields) => {
      if (error) {
        res.send(error);
      }
      res.send(result);
    };
});

//get animals by habitat
app.get("/animals/:habitat", (req: Request, res: Response) => {
  const habitat = req.params.habitat;
  con.query(
    "SELECT * FROM animals WHERE habitat=?",
    [habitat],
    (error, result, fields) => {
      if (error) {
        res.send(error);
      }
      res.send(result);
    }
  );
});
