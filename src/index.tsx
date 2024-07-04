import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/style.css";
import Guideline from "./pages/Guideline";
import StyleGuide from "./pages/StyleGuide";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Routes>
      <Route path="/guideline" element={<Guideline />} />
    </Routes>
    <Routes>
      <Route path="/styleguide" element={<StyleGuide />} />
    </Routes>
  </BrowserRouter>
);
