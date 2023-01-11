import React,{useCallback } from 'react';
import Navbar from "../src/components/Navbar.js"
import Header from "../src/components/Header.js"
import About from "../src/components/About.js"
import Experience from './components/Experience.js'
import Services from './components/Service.js';
import Contact from "./components/Contact.js"
import Footer from './components/Footer.js';

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  function printCoba(){
    console.log("coba");
  }

  // const coba = () => {
  //   console.log("coba");
  // }

  return (
    <div className="App">
      
        
      
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience coba = {printCoba}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
