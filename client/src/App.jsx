import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home.jsx";
import Medicines from "./pages/Medicines.jsx";
import Auth from "./pages/Auth.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import Diseases from "./pages/Diseases.jsx";
import SimpleChatbot from "./components/SimpleChatbot.jsx";
import Navbar from "./components/Navbar.jsx";
import MedicinePage from "./pages/MedicinePage.jsx";

const App = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300">
      {path !== "auth" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/medicines/:id" element={<MedicinePage />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SimpleChatbot />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
