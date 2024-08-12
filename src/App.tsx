import React from "react";
import "./App.css";
import { UIProvider } from "@yamada-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Page404 } from "./components/pages/Page404";

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
