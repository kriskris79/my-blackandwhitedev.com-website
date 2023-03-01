// import React from "react";
// import './App.css';
// // import Grid from "./components/Grid";
// import Navbar from "./components/Navbar";
// import Jobskills from "./components/Jobskills";
// import Textanimation from "./components/Textanimation";
// import Contact from "./components/Contact";
//
// function App() {
//     return (
//
//         <div className="container">
//             <div className="grid1"><Navbar/></div>
//
//             <div className="flex-container">
//                 <div className="grid2"><Textanimation/></div>
//                 <div className="grid3"><Jobskills/></div>
//                 <div className="grid4"><Contact/></div>
//             </div>
//         </div>
//     );
// }
//
// export default App;

import React from 'react';
// import ReactDOM from 'react-dom';
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
                    <div className="item">Item 5</div>
                    <div className="item">Item 6</div>
                </div>
            </div>
        );
    };




    export default App;
