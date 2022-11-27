import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./App.css";

const Home = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/ingredients">{t("ingredients.title")}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
