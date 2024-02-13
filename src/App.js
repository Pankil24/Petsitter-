import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import HomePage from "./Pages/Home/HomePage";
import PetService from "./Pages/Service/PetService";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/service" element={<PetService />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
