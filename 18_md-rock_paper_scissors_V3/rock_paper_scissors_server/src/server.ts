/* eslint-disable prettier/prettier */
import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mysql from "mysql2"
import { error } from "console";

type Player = {
  name: string,
}
type Results = {
  games: number,
  wins: number,
  loses:number,
  tie: number,
  streak: number
}
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
  port: 3306,
  user: "root",
  password: "qwerty",
  database: "RPS"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//check if player exists, if not add new and player and row in results, return existing or new player data,
app.post('/player', (req: Request<null, null, Player>, res: Response) => {
  const playername = req.body.name
  con.query(`SELECT * FROM users WHERE name=?`, [playername], 
  (error, results, fields)=> {
    if (error) {
      res.send(error)
    }
    const newRes = JSON.stringify(results)
    if(JSON.parse(newRes).length > 0) {
      res.send(results[0])
    }else{
      con.query('INSERT INTO users (name) VALUES (?)',[playername], (error, results, fields) => {
        if (error) {
          res.send(error)
        }
        const strResult = JSON.stringify(results)
        const insertID = (JSON.parse(strResult).insertId)
        con.query(`INSERT INTO results (user_id, games, wins, loses, tie, streak) VALUES (?,?,?,?,?,?)`, [insertID,0,0,0,0,0],
        (error, results, fields) => {
          if (error) {
            res.send(error)
          }
          con.query(`SELECT * FROM users WHERE name=?`, [playername], 
          (error, results, fields)=> {
            if (error) {
              res.send(error)
            }
            res.send(results[0])
        })
      })
        })
      }
    }
  )
})

//Get player results
app.get('/results/:name', (req:Request, res:Response) => {
  const name = req.params.name
  con.query(`SELECT id FROM users WHERE name=?`,[name], (error, results, fields) => {
    if (error) {
      res.send(error)
    }
    const userID = results[0].id
    con.query(`SELECT * FROM results WHERE user_id=?`, [userID], (error, results, fields) => {
      if (error) {
        res.send(error)
      }
      res.send(results[0])
    })
  })
})

// update player results 
//TODO get rid of ANY? IS THIS OK?
app.post('/results/:name', (req:Request<{[key:string]:string}, null, Results>, res:Response) => {
  const games = req.body.games
  const wins = req.body.wins
  const loses = req.body.loses
  const tie = req.body.tie
  const streak = req.body.streak
  const name = req.params.name
  con.query(`SELECT id FROM users WHERE name=?`,[name], (error, results, fields) => {
    if (error) {
      res.send(error)
    }
    const userID = results[0].id
    con.query(`UPDATE results SET 
    games=${games}, 
    wins=${wins}, 
    loses=${loses}, 
    tie=${tie}, 
    streak=${streak} 
    WHERE user_id=?`, [userID], (
      error, results, fields) => {
      if (error) {
        throw error
      }
      res.send({ success: true });
    })
  })
})


//get all players and results
app.get('/user-results', (req:Request, res:Response) => {
  con.query(`SELECT results.games,
  results.wins,
  results.loses,
  results.tie,
  results.streak,
  users.name FROM results
  JOIN users ON results.user_id = users.id
  ORDER BY results.wins DESC`, 
  (error, results, fields) => {
    if (error) {
      res.send(error)
    }
    res.send(results)
  })
})