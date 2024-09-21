import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Assuming Login.jsx is in the ./pages folder
import SignUp from './pages/SignUp'; // Assuming SignUp.jsx is in the ./pages folder

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route for login */}
        <Route path="/" element={<Login />} />
        
        {/* Route for the signup page */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
