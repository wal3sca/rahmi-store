import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

// COMPONENTS
import Nav from "./components/Nav";
import Hero from "./components/Hero";

const API = process.env.REACT_APP_API_URL;
console.log(API);

function App() {
  return (
    <div className="App min-vh-100">
      <Nav />
      <Hero />
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holistics/about" element={<About />} />
            <Route path="/holistics/services" element={<Services />} />
            <Route exact path="/holistics/:index/shop" element={<Shop />} />
            <Route exact path="/holistics/signup" element={<SignUp />} />
            <Route exact path="/holistics/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
