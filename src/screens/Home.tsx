import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BasicCard from "../components/BasicCard";
import { TopBar } from "../components/TopBar";
import { ingredientsRoute } from "../routes";

const Home = (): JSX.Element => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box>
            <TopBar text={t("home.title")} />
            <Grid
                container
                spacing={2}
                sx={{
                    "padding-top": "32px",
                    "padding-bottom": "32px",
                    "padding-left": "32px",
                    "padding-right": "32px",
                }}
            >
                <Grid>
                    <BasicCard
                        onClick={() => navigate(ingredientsRoute)}
                        title={t("ingredients.title")}
                        content={t("ingredients.description")}
                        image="https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=2000&t=st=1669563539~exp=1669564139~hmac=11966934f930e8a41be860a42aa86356df1d67db2f35304dcc1f6d4bdc0c02ec"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
