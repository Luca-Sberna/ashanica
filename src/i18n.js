import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../src/Lang/en/translation.json";
import translationIT from "../src/Lang/it/translation.json";

const resources = {
    en: {
        translation: translationEN,
    },
    it: {
        translation: translationIT,
    },
};

const savedLang = localStorage.getItem("lang") || "it";

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLang,
        fallbackLng: "it",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
