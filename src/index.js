// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// ReactDOM.render(
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// React 18 : )
import React from 'react';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
);