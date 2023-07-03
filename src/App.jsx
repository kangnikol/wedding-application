import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Lander from './pages/Lander';

export default function App() {
    return (
        // Navbar start
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/lander' element={<Lander />} />
            </Routes>
        </Router>
    );
}
