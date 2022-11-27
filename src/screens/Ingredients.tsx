import React from "react";
import { useTranslation } from "react-i18next";
import { TopBar } from "../components/TopBar";

const Ingredients = () => {
    const { t } = useTranslation();

    return <TopBar text={t("ingredients.title")} />;
};

export default Ingredients;
