import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import About from './components/Pages/About/About';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;