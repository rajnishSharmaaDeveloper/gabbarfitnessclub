import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Schedule from "./components/Schedule/Schedule";
import Trainers from "./components/Trainers/Trainers";
import Contact from './components/Contact/Contact';
import Gallery from "./components/Gallery/Gallery"

const App = () => (
  <div className="App">
    <Main />
    <GymProgram />
    <Member />
    {/* <Classes /> */}
    {/* <Schedule /> */}
    <Trainers />
    <Gallery/>
    <Contact />
  </div>
);

export default App;
