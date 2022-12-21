import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './arreglos.css';
import reportWebVitals from './reportWebVitals';


import Header from './header/Header';
import Section from './section/Section';
import About from './section/About';
import Portafolio from './section/Portafolio';
import Testimonial from './section/Testimonial';
import Teams from './section/Teams';
import Contact from './section/Contact';
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Section/>
    <About/>
    <Portafolio/>
    <Testimonial/>
    <Teams/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
