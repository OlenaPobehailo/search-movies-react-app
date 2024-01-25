import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import theme from "styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/search-movies-react-app">
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
