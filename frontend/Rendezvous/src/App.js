import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Screens/Home';
import CreateGroup from './Screens/CreateGroup';


function App() {
  return (
    <Router>
      <div className="bg-primary px-6 py-8 font-Urbanist text-default">
        {/* Navigation */}
        <nav className="flex justify-between items-center">
          {/* Logo as Home Button */}
          <Link to="/">
            <img src={logo} alt="Rendezvous" className="w-16 md:w-16" />
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateGroup />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
