
import React from 'react';
import './App.css';
import "./scss/generic/_main.scss";
import Navbar from "./components/Navbar";
import JobSkills from "./components/JobSkills";
import Contact from "./components/Contact";
import TypeWriter from "./components/TypeWriter";

const App = () => {
    return (


            <div className="container">
                <div className="row">
                    <div className="flex1"><Navbar/></div>
                    <div className="flex2"><TypeWriter/></div>
                    <div className="flex3"><JobSkills/></div>


                    <div className="flex4"><Contact/></div>
                </div>
            </div>
        );
    };




    export default App;
