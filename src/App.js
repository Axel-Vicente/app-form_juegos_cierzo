import React, { useState, useEffect } from 'react';

import { Article,  Navbar, RRSSIcon } from "./pages/blog/components";
import './App.css'

const iconNames = ["Instagram", "Youtube", "Facebook"];

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
            <Article />
            <footer className='wrapper'>
                {iconNames.map(iconName => (
                    <RRSSIcon name={iconName} />
                ))}
            </footer>
        </div>
    )
}

export default App