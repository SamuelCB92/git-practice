import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginApp from "./LoginApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginApp />
  </StrictMode>
);
