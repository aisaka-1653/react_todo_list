import React from "react";
import "./App.css";
import { UIProvider } from "@yamada-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
