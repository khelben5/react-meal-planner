import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            home: {
                title: "React meal planner",
            },
            ingredients: {
                title: "Ingredients",
                description: "Manage the ingredients you have at home",
            },
        },
    },
    es: {
        translation: {
            home: {
                title: "React meal planner",
            },
            ingredients: {
                title: "Ingredientes",
                description: "Gestiona los ingredientes que tienes en casa",
            },
        },
    },
};

void i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
