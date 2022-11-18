import './App.css';
import "./Sidebar/Navbar"
import Navbar from './Sidebar/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from './Login/LoginForm';

export default function App() {
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