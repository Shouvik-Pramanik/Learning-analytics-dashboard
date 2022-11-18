import './App.css';
import "./Sidebar/Navbar"
import Navbar from './Sidebar/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from './Login/LoginForm';
import { useEffect } from 'react';

export default function App() {
  useEffect(()=>{
      fetch("/members").then(res=>res.json()).then(
        e=>{
          console.log(e)
        }
      )
    },[])
  return (
    
    <>
      
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Navbar />} /> 
      <Route path="/login" element={<LoginForm />} /> 
        </Routes>
    </div>
    </Router>
    
    </>
  );
}