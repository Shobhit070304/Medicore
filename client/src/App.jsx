import { Routes, Route, useParams, useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Medicines from "./pages/Medicines.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import Diseases from "./pages/Diseases.jsx";
import SimpleChatbot from "./components/SimpleChatbot.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300">
      {path !== "login" && path !== "signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SimpleChatbot />
    </div>
  );
};

export default App;
