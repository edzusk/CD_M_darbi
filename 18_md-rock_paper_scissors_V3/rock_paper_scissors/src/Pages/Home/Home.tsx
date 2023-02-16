import { changeLanguage } from "i18next"
import { initReactI18next, useTranslation } from "react-i18next";
import {translationEn, translationEs, translationLv} from '../../assets/translations'
import i18n from 'i18next';
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { host } from "../../assets/gameElements";


type HomeProps = {
  lng:string
  setPlayername: (name:string) => void;
}
const getPlayerName = async (playerName: string)=> {
  const newPlayer = {name: playerName}
  const  {data}  = await axios.post(`${host}/player`, newPlayer);
  return data.name
} 

const Home = ({lng, setPlayername}:HomeProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [player, setPlayer] = useState('');

  const handleSubmit= async () => {
    const playerName = await getPlayerName(player)
    console.log(playerName)
    setPlayername(playerName)
    navigate(`/game/${playerName}`)
  }


  return (
  <div className="container">
    <div className="home_wrapper">
    <h1 className="gameHedding">{t('gameTtile')}</h1>
    <form 
    onSubmit={(e) => {
      e.preventDefault();
      handleSubmit()
    }}
    className="startGameform" action="">
      <label htmlFor="">{t('nameInput')}
      <br />
        <input type="text"
        onChange={(e) => setPlayer(e.target.value)}
        className="textInput" placeholder='John..' />
      </label>
        <br />
        <button className="btn">{t('startGame')}</button>

    </form>
    </div>
  </div>
  )
}

export default Home;