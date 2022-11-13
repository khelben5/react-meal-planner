import React from "react";
import "./App.css";
import { TopBar } from "./components/TopBar";
import { useTranslation } from "react-i18next";

// App
function App() {
    const { t } = useTranslation();

    return (
        <div className="App">
            <TopBar text={t("ingredients.title")} />
        </div>
    );
}

export default App;
