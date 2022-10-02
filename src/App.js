import './App.css';
import "./Sidebar/Navbar"
import Navbar from './Sidebar/Navbar';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";


export default function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/">
        <Navbar />
      </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Routes>
      
    </div>
    </Router>
  );
}