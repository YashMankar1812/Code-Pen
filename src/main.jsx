// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );


// Import createRoot instead of using ReactDOM.render
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Select the root element in your HTML
const rootElement = document.getElementById("root");

// Use createRoot to render the app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
