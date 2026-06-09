import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import i18n from "./assets/translation/translation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
