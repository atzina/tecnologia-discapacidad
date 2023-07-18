import * as React from "react";
import{createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as bootstrap from 'bootstrap';


const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
