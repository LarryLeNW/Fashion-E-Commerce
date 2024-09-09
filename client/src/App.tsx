import React from "react";
import logo from "./logo.svg";
import Home from "./pages/public/Home";
import useRouter from "hooks/useRoutes";
import "./index.css";

function App() {
    const element = useRouter();
    return element;
}

export default App;
