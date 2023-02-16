import { ChangeEvent } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
// import {translationEn, translationEs, translationLv} from '../../assets/translations'


type HeaderProps = {
  lng:string,
  onLngChange: (lng: string) => void
  player: string
}

const Header = ({lng, onLngChange, player}: HeaderProps) => {
  const { t } = useTranslation()
  const handlechange = (ev: ChangeEvent<HTMLSelectElement>) => {
    onLngChange(ev.target.value)
  }
  const gamelink = player? `/game/${player}` : '/';
  const resultsLink = player? `/results/${player}` : '/';
  
  return (
    <div className="container">
      <nav className="navigation">
        <Link className="navigation__element" to={'/'}>{t('home')}</Link>
        <Link className="navigation__element" to={gamelink}>{t('game')}</Link>
        <Link className="navigation__element" to={resultsLink}>{t('results')}</Link>
        <Link className="navigation__element" to={'/about'}>{t('about')}</Link>
        <select className="languageDrop" name="language"
        onChange={(e) => handlechange(e)}
        id="">
          <option value="">{t("language")}</option> //??? probaly not needed
          <option value="en">English</option>
          <option value="lv">Latviešu</option>
          <option value="es">Español</option>
        </select>
      </nav>
    </div>
  )
}


export default Header