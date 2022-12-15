import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import MainHeader from './components/Navigation/Headers.js/MainHeader';
import Home from './components/Navigation/Home';
import ValidatedLoginForm from './components/Screens/Auth/ValidatedLoginForm';
import Footer from './components/Navigation/Footer';
import Signup from './components/Screens/Auth/Signup';


import LoginForm from './components/Screens/Auth/LoginForm';
import UserViewCars from './components/Screens/Car/UserViewCars';


function App() {

  const [user, setUser] = useState()

   // Here we can make a request to see if the user is logged in or not
  useEffect(() => {
    // Mock loading screen timer 
    // setInterval(() => {
    //   setUser("Jerry")
    // }, 3000 )
  }, [])
  
// Mock Loading screen
  if (!user){
    return (
      <div>
        THE PAGE IS LOADING
      </div>
    )
  }
 
  return (
    <div className="App">
      
      <MainHeader/>
     
      <Routes>
        <Route path="/" element={<Home/> } exact />
        <Route path="/LoginForm" element={ <LoginForm/> } />
        <Route path="/SignUp" element={<Signup/>} />
        <Route path="/UserViewCars" element={<UserViewCars/>} />
      </Routes>
      <Footer/>
      

      </div>
  );
}


export default App;
