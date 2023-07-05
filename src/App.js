import "./App.css";
import ResumeState from "./Context/ResumeState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          {/* <Route exact path="/Login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
