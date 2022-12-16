import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import MainHeader from './components/Navigation/Headers/MainHeader';
import Home from './components/Navigation/Home';
import Footer from './components/Navigation/Footer';
import Signup from './components/Screens/Auth/Signup';


import LoginForm from './components/Screens/Auth/LoginForm';
import UserViewCars from './components/Screens/Car/UserViewCars';
import SigninSignoutNav from './components/Navigation/Headers/SigninSignoutNav';


function App() {

  // const [user, setUser] = useState()

  // The app needs a JWT in order to make requests to the server
  // If a user is not logged in, they will not have a JWT.

  const [JWT, setJWT] = useState("")
  
  // const subscriber = useRef({})
  useEffect(() => {
    // if there is a JWT already 
    // if(!JWT === ""){
      
    // }
  
    return () => {
      
    }
  }, [])
  


  if (!JWT) {  // If a user is not logged in...

    return (   // ...display login form
      <div className="App">
        <SigninSignoutNav JWT={JWT} />
        <Routes>
          <Route path="/LoginForm" element={<LoginForm setJWT={setJWT} />} /> 
        </Routes>
        <Footer />
      </div>
    );

  }

  return ( // otherwise display the user homepage
    <div className='App'>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/UserViewCars" element={<UserViewCars />} />
      </Routes>
    </div>
  )
}


export default App;
