import React from 'react';
import Card from './components/Card';
//import firebase from './firebase';
import Navbar from './navbar';
import Internships from "./pages/Internships";
import Volunteer from './pages/Volunteer';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Events from "./pages/Events";

import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
