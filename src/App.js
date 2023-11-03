import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Main from "./Components/main/Main";
import Presentation from "./Components/presentation/Presentation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Main />} />
            <Route path="/myself" element={<Presentation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
