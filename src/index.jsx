// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Redux imports
import { Provider } from "react-redux";
import { store } from "./store";

// Context imports
import { AppProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
