import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./firebase/AuthProvider.jsx";
import { NextUIProvider } from "@nextui-org/react";

import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/roboto-mono";
import "@fontsource-variable/inter";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NextUIProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </NextUIProvider>
    </React.StrictMode>
);
