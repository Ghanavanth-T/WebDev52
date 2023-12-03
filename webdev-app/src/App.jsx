import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Textform1 from "./components/Textform1";
import Login from "./components/Login";
import Course from "./components/Course";
import CSE from "./components/CSE/CSE_sem";
import Sem_1 from "./components/CSE/Sem_1";
import Physics from "./components/CSE/Physics";
import Chemistry from "./components/CSE/Chemistry";
import Reference from "./components/Reference";
import Contact from "./components/Contact";

// For React Router v5



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/Textform1" element={<Textform1 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/CSE" element={<CSE />} />
          <Route path="/Sem_1" element={<Sem_1 />} />
          <Route path="/Physics" element={<Physics />} />
          <Route path="/Chemistry" element={<Chemistry />} />
          <Route path="/Reference" element={<Reference />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
