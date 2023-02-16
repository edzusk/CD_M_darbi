import { changeLanguage } from "i18next"
import { initReactI18next, useTranslation } from "react-i18next";
import {translationEn, translationEs, translationLv} from '../../assets/translations'
import i18n from 'i18next';


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
type ResultsProps = {
  lng: string
}

const Results= ({lng}:ResultsProps) => {
  const { t } = useTranslation();

  return <h1>{t('results')}</h1>
}


export default Results;