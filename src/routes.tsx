import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Ingredients from "./Ingredients";

export const ingredientsRoute = "/ingredients";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/ingredients",
        element: <Ingredients />,
    },
]);

export default router;
