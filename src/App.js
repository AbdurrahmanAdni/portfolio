import React from 'react';
import Navbar from "../src/components/Navbar.js"
import Header from "../src/components/Header.js"
import About from "../src/components/About.js"
import Experience from './components/Experience.js'
import Services from './components/Service.js';
import Contact from "./components/Contact.js"
import Footer from './components/Footer.js';

import Particles from 'react-particles-js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  function printCoba(){
    console.log("coba");
  }

  // const coba = () => {
  //   console.log("coba");
  // }

  return (
    <div className="App">
      <Particles 
        params = {{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area : 900 
              }
            },
            shape: {
              type : "circle",
              stroke : {
                width : 6,
                color : "#048b8b"
              }
            }
          }
        }}
      />
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
