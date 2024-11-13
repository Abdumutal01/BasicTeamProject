import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import lngRu from './Translation/ru.json'
import lngUz from './Translation/uz.json'
import lngEn from './Translation/en.json'

const resources = {
    ru: {
        translation: lngRu
    },
    uz: {
        translation: lngUz
    },
    en: {
        translation: lngEn
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false
        }
    });
export default i18n