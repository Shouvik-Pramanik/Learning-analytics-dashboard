import './App.css';
import "./Sidebar/Navbar"
import Navbar from './Sidebar/Navbar';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Navbar />} /> 
      <Route path="/login" element={<Login />} /> 
        </Routes>
      
    </div>
    </Router>
  );
}