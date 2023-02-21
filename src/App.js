import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/sign-in" element={<SignIn />}/>
    <Route path="/sign-up" element={<SignUp />}/>
    <Route path="/forgot-password" element={<ForgotPassword />}/>
    <Route path="/Offers" element={<Offers />}/>

    </Routes>
    </Router>
    </div>
  );
}

export default App;
