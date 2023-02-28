import React from "react";
import './App.css';
// import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import Jobskills from "./components/Jobskills";
import Textanimation from "./components/Textanimation";

function App() {
    return (

        <div className="container">
            <div className="grid1"><Navbar/></div>

            <div className="grid2"><Textanimation/></div>
            <div className="grid3"><Jobskills/></div>
        </div>
    );
}

export default App;