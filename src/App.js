import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import {Route} from 'react-router-dom';
//import {BrowserRouter} from 'react-router-dom';
//import {Route, Switch} from 'react-router';
//import { Routes ,Route } from 'react-router-dom';
import { Route, Routes } from "react-router";
//import { Router, Route, Routes } from 'react-router-dom';
//import { Switch ,Route } from 'react-router-dom';
//import {Route, Routes} from 'react-router';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";*/
//import {Switch} from 'react-router';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/services" element={<Services/>} />
    <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
