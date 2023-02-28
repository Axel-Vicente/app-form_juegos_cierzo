import React, { useState, useEffect } from 'react';

import { Article, Navbar, Footer } from "./pages/blog/components";
import './App.css'

function setDocumentTitle(title) {
    document.title = title;
}

const App = () => {
    setDocumentTitle('Juegos del cierzo');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <div className={scrolled ? 'gradient__bg scroll__fixed' : 'gradient__bg'}>
                <Navbar />
            </div>
            <Article />
            <Footer />
        </div>
    )
}

export default App