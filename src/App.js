import React, { useState, useEffect } from 'react';

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import { Blog, Header } from "./containers";
import './App.css'

const App = () => {
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
            <Header />
        </div>
    )
}

export default App