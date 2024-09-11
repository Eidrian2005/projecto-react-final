import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contacts from '../pages/Contacts'


const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
    </Routes>
    </Router>
);
};


export default Routing;