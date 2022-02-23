// import axios from "axios";
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Shop from "./Pages/Shop";

// COMPONENTS
import Nav from "./Components/Nav";

const API = process.env.REACT_APP_API_URL;

console.log(API);
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holistics/:id/about" element={<About />} />
            <Route path="/holistics/:id/Services" element={<Services />} />
            <Route exact path="/holistics/:id" element={<Shop />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
