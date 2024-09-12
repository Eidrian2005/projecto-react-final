import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contacts from '../pages/Contacts'
import NewProducts from '../pages/admin/NewProducts';

const Routing = () => {

return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/NewProducts' element={<NewProducts />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
    </Routes>
    </Router>
);
};


export default Routing;