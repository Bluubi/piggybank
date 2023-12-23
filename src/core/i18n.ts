import i18next from "i18next";
import {initReactI18next} from 'react-i18next'
import en from '../../public/locales/translations/en.json';
import es from '../../public/locales/translations/es.json';

i18next.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: en
        },
        es: {
            translation: es
        }
    },
    fallbackLng: "en"
})

