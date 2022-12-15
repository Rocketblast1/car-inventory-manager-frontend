import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainHeader from './components/Navigation/Headers.js/MainHeader';
import Home from './components/Navigation/Home';
import ValidatedLoginForm from './components/Screens/Auth/ValidatedLoginForm';
import Footer from './components/Navigation/Footer';
import Signup from './components/Screens/Auth/Signup';


import LoginForm from './components/Screens/Auth/LoginForm';

function App() {
 
  return (
    <div className="App">
      
      {/* <MainHeader/>
     <ValidatedLoginForm/>
      <Routes>
        <Route path="/" element={<Home/> } exact />
        <Route path="/LoginForm" element={ <LoginForm/> } />
        <Route path="/SignUp" element={<Signup/>} />
        
        
      </Routes>
      <Footer/> */}
      

      </div>
  );
}


export default App;
