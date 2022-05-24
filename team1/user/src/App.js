import React from 'react';
import { Routes, Route } from 'react-router';
import './components/About/About';
import About from './components/About/About';
import Home from './components/LandingPage/Home';
import LoggedInHome from './components/LoggedInHome';
import Login from './components/Access/Login';
import Signup from './components/Access/Signup';
import Nav from './components/LandingPage/Nav';


class App extends React.Component{

 render() {
  return(
    <div>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<LoggedInHome/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element = { <Login /> } />
        <Route path='/signup' element = { <Signup /> } />
      </Routes>
      
    </div>
  )}
}

export default App;