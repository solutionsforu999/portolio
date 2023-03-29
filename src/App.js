import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
function App() {
  return (
    <>
    <Navbar/>
    <Routes path='/'>
      <Route path='home' element={<Home/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
