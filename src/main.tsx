import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
