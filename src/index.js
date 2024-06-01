import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './About_us/About';
import Welcome from './welcome/Welcome';
import manish from "./welcome/manish.jpg"
import Service from './Service/Service';
import Navbar from './Navbar/Navbar';
import Team from './Team/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
