import rock from '../../public/rock.png'
import paper from '../../public/paper.png'
import scissors from '../../public/scissors.png'

import { initReactI18next, useTranslation } from "react-i18next";
import {translationEn, translationEs, translationLv} from '../../assets/translations'
import i18n from 'i18next';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {   
  random,
  host,
  getResults,
  updateScore,
  Results } from '../../assets/gameElements';
import { useQuery } from 'react-query';


type GameProps = {
  lng:string
}

const Game = ({lng}:GameProps) => {
  const { t } = useTranslation();
  const { name } = useParams();
  const [palyerElem, setPlayerElem] = useState('')
  const [pcElem, setPcElem] = useState('')
  const [games, setGames] = useState(0)
  const [wins, setWins] = useState(0)
  const [loses, setLoses] = useState(0)
  const [tie, setTie] = useState(0)
  const [streak, setStreak] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)
  

  useEffect(()=> {
    getResults(name!).then((data) =>{
      setGames(data!.games);
      setWins(data!.wins);
      setLoses(data!.loses);
      setTie(data!.tie);
      setStreak(data!.streak);
    }
    );
  },[])
  // const {data, isError, isLoading, error} =  useQuery<Results>(['results'], async() => await getResults(name!));
  // console.log(data)
  // if (data) {
  //   setGames(data.games);
  //   setWins(data.wins);
  //   setLoses(data.loses);
  //   setTie(data.tie);
  //   setStreak(data.streak);
  // }
  
  const playGame =  (element:string) => {
    const pcnewElem = random(rock, paper, scissors)
    setPlayerElem(element);
    setPcElem(pcnewElem)
    setGames(games + 1)
    if (element === pcnewElem){
      toast.warn('🦄 TIE!');
      setTie(tie + 1)
    }else if (
      element===rock && pcnewElem===scissors ||
      element=== paper && pcnewElem===rock ||
      element=== scissors && pcnewElem===paper) {
        toast.success('🦄 WIN!');
        setWins(wins +1)
        setCurrentStreak(currentStreak + 1)
        if (streak <= currentStreak) {
          setStreak(currentStreak + 1)
        }
    }else {
      toast.error('🦄 LOST!');
      setLoses(loses +1)
      setCurrentStreak(0)
    }
    updateScore(name!, {games, wins, loses, tie, streak})
  }
  // if (isError){
  //   return <h1>Something went Wrong {`${error}`} </h1>
  // }
  // if (isLoading){
  //   return <h1>Loading....</h1>
  // }

  return (
    <>
      <div className="container"></div>
      <div className="container">
        <div className="game_header">
          <h2 className="game_header__hedding">{t("chooseElem")}</h2>
          <div className="element_wrapper">
            <button onClick={() => playGame(rock)} className="element_btn">
              <img className="element_btn__icon" src={rock} alt="" />
            </button>
            <button onClick={() => playGame(paper)} className="element_btn">
              <img className="element_btn__icon" src={paper} alt="" />
            </button>
            <button onClick={() => playGame(scissors)} className="element_btn">
              <img className="element_btn__icon" src={scissors} alt="" />
            </button>
          </div>
        </div>
        <div className="gamefield">
          <div className="elemet_wrapper">
            <img className="element element--player" src={palyerElem} alt="" />
          </div>
          <div className="results">
            <p className="results__item name">
              {t("player")}: {name}
            </p>
            <p className="results__item">
              {t("playedGames")}: {games}
            </p>
            <p className="results__item">
              {t("gamesWon")}: {wins}
            </p>
            <p className="results__item">
              {t("gamesLost")}: {loses}
            </p>
            <p className="results__item">
              {t("gamesDraw")}: {tie}
            </p>
            <p className="results__item">
              {t("currentstreak")}: {currentStreak}
            </p>
            <p className="results__item">
              {t("streak")}: {streak}
            </p>
          </div>
          <div className="elemet_wrapper">
            <img className="element element--pc" src={pcElem} alt="" />
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </>
  );
}

export default Game

