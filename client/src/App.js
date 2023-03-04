import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Blog } from './pages';
import './App.css'

function setDocumentTitle(title) {
    document.title = title;
}

const App = () => {
    setDocumentTitle('Juegos del cierzo');

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/app-form_juegos_cierzo/login" element={<Login />} />
                    <Route path="/app-form_juegos_cierzo" element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App