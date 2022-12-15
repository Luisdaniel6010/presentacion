import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './home.css';


ReactDOM.render(
  <BrowserRouter>
      <Login />
      <Catalogo />
  </ BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

