
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Textanimation from "./components/Textanimation";
import Jobskills from "./components/Jobskills";
import Contact from "./components/Contact";

const App = () => {
    return (


            <div className="container">
                <div className="row">
                    <div className="flex1"><Navbar/></div>
                    <div className="flex2"><Textanimation/></div>
                    <div className="flex3"><Jobskills/></div>

                    <div className="flex4"><Contact/></div>
                </div>
            </div>
        );
    };




    export default App;
