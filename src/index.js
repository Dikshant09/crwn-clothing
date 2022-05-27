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
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
  {/* </Provider> */}
);