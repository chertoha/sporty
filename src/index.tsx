import React from "react";
import ReactDOM from "react-dom/client";
// import "styles/index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import globalStyles from "styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const inputGlobalStyles = <GlobalStyles styles={{ h1: { color: "grey" } }} />;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <CssBaseline />
          {globalStyles}
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
