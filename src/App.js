import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/Auth Pages/LoginPage";
import RegisterPage from "./components/Auth Pages/RegisterPage";
import MainPage from "./components/Main Page/MainPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
            {/*<Route path="/register" element={< MainPage/>} />*/}
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
  );
}

export default App;
