import React from "react";

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import { Blog, Header } from "./containers";
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
        </div>
    )
}

export default App