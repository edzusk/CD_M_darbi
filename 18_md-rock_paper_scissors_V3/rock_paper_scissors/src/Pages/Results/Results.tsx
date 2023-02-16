import { changeLanguage } from "i18next"
import { initReactI18next, useTranslation } from "react-i18next";
import {translationEn, translationEs, translationLv} from '../../assets/translations'
import i18n from 'i18next';
import { host } from "../../assets/gameElements";
import axios from "axios";
import { useQuery } from "react-query";

type PlayerResults = {
  name:string,
  games:number,
  wins:number,
  loses:number,
  tie:number,
  streak:number,
  id: number,
}


type ResultsProps = {
  lng: string
}
const getAllResults = async () => {
  const {data} = await axios.get(`${host}/user-results/`);
  return data
}

const Results= ({lng}:ResultsProps) => {
  const { t } = useTranslation();

  const {data, isError, isLoading, error} = useQuery<PlayerResults[]>(['results'], getAllResults);

  if (isLoading){
    return <h1>Loading...</h1>
  }
  if (!data){
    return <h1>We are lost</h1>
  }
  if (isError){
    return <h1>{`${error}`}</h1>
  }

  return (
    <div className="container">
      <div className="game_header">
        <h1 className="game_header__hedding">{t('results')}</h1>
      </div>
      <table className="resultsTable">
        <tr className="resultsTable__row resultsTable__row--heddings">
          <th className="cell">{t('player')}</th>
          <th className="cell">{t('playedGames')}</th>
          <th className="cell">{t('gamesWon')}</th>
          <th className="cell">{t('gamesLost')}</th>
          <th className="cell">{t('gamesDraw')}</th>
          <th className="cell">{t("streak")}</th>
        </tr>
        {data.map(userResults =>(
          <tr className="resultsTable__row">
            <th className="cell">{userResults.name}</th>
            <th className="cell">{userResults.games}</th>
            <th className="cell">{userResults.wins}</th>
            <th className="cell">{userResults.loses}</th>
            <th className="cell">{userResults.tie}</th>
            <th className="cell">{userResults.streak}</th>
          </tr>
        ))}
      </table>
      </div>
  )
}


export default Results;