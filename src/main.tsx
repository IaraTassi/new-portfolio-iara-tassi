import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./components/Navbar/Navbar.css";
import "./components/About/About.css";
import "./components/Course/Course.css";
import "./components/Skills/Skills.css";
import "./components/Contact/Contact.css";
import "./components/Footer/Footer.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
