import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './App.css'
import discordLogo from "../assets/discord_main_logo.svg";
import LandingPage from "../Pages/LandingPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
