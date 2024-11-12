import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Solutions from './pages/Solutions';
import Company from './pages/Company';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/solutions' element={<Solutions />}></Route>
        <Route path='/company' element={<Company />}></Route>
        <Route path='/contact' element={<ContactForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
