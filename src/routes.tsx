import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Ingredients from "./screens/Ingredients";

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
