import React from "react";
import './App.css';

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from './components/Routes';


function App() {

  return(
    <BrowserRouter>
     <Header/>

      <Routes />

     <Footer />
     </BrowserRouter>
  );
}

export default App;