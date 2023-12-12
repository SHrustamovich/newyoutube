import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./companents/root";
import { BrowserRouter } from "react-router-dom";
import "./assets/style/main.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <Root />
        </BrowserRouter>
);
