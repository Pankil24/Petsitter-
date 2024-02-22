import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import HomePage from "./Pages/Home/HomePage";
import PetService from "./Pages/Service/PetService";
import PetGromming from "./Pages/Service/Service Types/PetGromming";
import AdminComp from "../src/Pages/Admin/AdminComp";
import PetTraining from "./Pages/Service/Service Types/PetTraining";
import ServiceDetails from "./Pages/Service history/ServiceDetails";
import Loader from "./Pages/Components/Loader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/service" element={<PetService />} />
          <Route path="/service/dog-service" element={<PetGromming />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/admin" element={<AdminComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
