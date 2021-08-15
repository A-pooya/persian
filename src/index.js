import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App"
import Appp from "./Components/Appp";
import theme from "./Components/theme";

ReactDom.render(
<ThemeProvider theme={theme}>
    <React.StrictMode>
        <Appp/>
    </React.StrictMode>
</ThemeProvider> ,   
    document.getElementById("root")
);
