import axios from "axios"

type Results = {
  id:number,
  user_id:number,
  games:number,
  wins:number,
  loses:number,
  tie:number,
  streak:number,
}
type NewResults = {
  games:number,
  wins:number,
  loses:number,
  tie:number,
  streak:number,
}

const host = 'http://localhost:3004'
const random=(...args:string[])=> {
  return(args[Math.floor(Math.random()*args.length)])
}

const getResults = async (name:string) => {
  const {data} = await axios.get(`${host}/results/${name}`)
  return data
}

const updateScore = (name:string, results:NewResults) => {
  axios.post(`${host}/results/${name}`, results)
}
// const handleLost = async (name:string) => {
//   const {data} = await axios.post(`${host}/lost/`,name)
//   return data
//   }
// const handleTie = async (name:string) => {
//   const {data} = await axios.post(`${host}/tie/`,name)
//   return data
// }


export{
  random,
  host,
  getResults,
  updateScore,
  // handleLost,
  // handleTie,
  type Results,
}
