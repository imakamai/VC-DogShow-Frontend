import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/Auth Pages/LoginPage";
import RegisterPage from "./components/Auth Pages/RegisterPage";
import MainPage from "./components/Main Page/MainPage";
import DogFormForShow from "./components/Information/Forms/DogFormForShow";
import PriceList from "./components/Information/Service price/PriceList";
import UserProfile from "./components/Profile/UserProfile";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dogform" element={<DogFormForShow />} />
            <Route path="/pricelist" element={<PriceList />} />
            <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Router>
  );
}

export default App;
