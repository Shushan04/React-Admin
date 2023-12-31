import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/pages/home';
import Login from './view/pages/login';
import Register from './view/pages/register';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
