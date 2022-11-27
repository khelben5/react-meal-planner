import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TopBar } from "../components/TopBar";

const Home = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Box>
            <TopBar text={t("home.title")} />
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/ingredients">{t("ingredients.title")}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Box>
    );
};

export default Home;
