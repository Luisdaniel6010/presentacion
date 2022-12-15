import React from "react";
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink, Routes  } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routess from "./Routess";


function App() {

  return(
    <Router>

     <Header />
      <Routess />
     <Footer />

     </Router>
  );
}

export default App;