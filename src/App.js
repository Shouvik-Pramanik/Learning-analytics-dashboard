import './App.css';
import "./Sidebar/Navbar"
import Navbar from './Sidebar/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from './Login/LoginForm';
import DefaultLogin from './DefaultLogin';
import Charts from './Charts';

export default function App() {
  return (
    
    <>
      
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={< DefaultLogin/>} />
        <Route path="/dashboard" element={<Navbar />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/charts" element=
        {<Charts 
          data="Data" 
        />} 
        /> 
      </Routes>
    </div>
    </Router>
    
    </>
  );
}