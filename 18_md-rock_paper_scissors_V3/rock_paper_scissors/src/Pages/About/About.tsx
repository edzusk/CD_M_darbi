import { changeLanguage } from "i18next"
import { initReactI18next, useTranslation } from "react-i18next";
import {translationEn, translationEs, translationLv} from '../../assets/translations'
import i18n from 'i18next';



type AboutProps = {
  lng: string
}

const About = ({lng}:AboutProps) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="rulesWrapper">
      <h2>{t('rules')}</h2>
      </div>
    </div>
  )
}

export default About