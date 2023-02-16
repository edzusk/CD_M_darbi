import './assets/cssreset.css'
import './assets/bootstrap-grid.css'
import './App.css'

import { Route, Routes } from "react-router-dom";
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';


import Home from './Pages/Home/Home';
import Results from './Pages/Results/Results';
import About from './Pages/About/About';
import Game from './Pages/Game/Game';
import Header from './Modules/Header/Header';
import {translationEn, translationEs, translationLv} from './assets/translations'
import { Suspense, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';


i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources: {
      en : { translation : translationEn},
      lv : { translation : translationLv},
      es : { translation : translationEs}
    },
    lng : "en",
    fallbackLng: "en",
    interpolation: { escapeValue : false },
  });
  const queryClient = new QueryClient()

const  App = () =>  {
  const [lang, setlng] = useState(localStorage.getItem('lang') || 'en');
  const [playername, setPlayerName] =  useState(localStorage.getItem('playername') || '');;

  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang)
    localStorage.setItem('playername', playername);
  }, [lang, playername]);


  const selectLng = (lng : string) => {
    i18n.changeLanguage(lng)
    setlng(lng)
  }
   
  const handleNamechange = (name:string) => {
    setPlayerName(name)
  }
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Suspense fallback="Loading...">
    <Header lng={lang} player={playername} onLngChange={selectLng}/>
    <Routes>
        <Route path="/" element={<Home setPlayername={handleNamechange} lng={lang}/>} />
        <Route path={`/game/:name`} element={<Game lng={lang}/>} />
        <Route path={`/results/:name`} element={<Results lng={lang}/>} />
        <Route path="/about" element={<About lng={lang}/>} />
    </Routes>
    </Suspense>
    </QueryClientProvider>
    </>
  )
}

export default App
