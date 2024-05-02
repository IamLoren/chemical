import {Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
  );
}

export default App;
