import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/holistics" element={<Index />} />
        <Route path="/holistics/:id" element={<Show />} />
        <Route path="/holistics/:id/edit" element={<Edit />} />
        <Route path="/holistics/:id/signup" element={<SignUp />} />
        <Route path="/holistics/:id/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
