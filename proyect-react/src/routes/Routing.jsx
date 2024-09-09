import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Home from '../pages/Home'
const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
    </Routes>
    </Router>
);
};


export default Routing;