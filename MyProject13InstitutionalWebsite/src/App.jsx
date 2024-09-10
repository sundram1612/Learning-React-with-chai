import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import About from './components/About';
// import Contact from './components/Contact';
// import Courses from './components/Courses';
import SignUp from './components/SignUp';
// import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1 className="text-3xl">Home Page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
