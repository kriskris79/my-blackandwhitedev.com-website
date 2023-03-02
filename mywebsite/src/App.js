
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jobskills from "./components/Jobskills";
import Skillstitle from "./components/Skillstitle";
import Contact from "./components/Contact";
import Typewriter from "./components/Typewriter";

const App = () => {
    return (


            <div className="container">
                <div className="row">
                    <div className="flex1"><Navbar/></div>
                    <div className="flex2"><Typewriter/></div>
                    <div className="flex3a"><Skillstitle/></div>
                    <div className="flex3"><Jobskills/></div>


                    <div className="flex4"><Contact/></div>
                </div>
            </div>
        );
    };




    export default App;
