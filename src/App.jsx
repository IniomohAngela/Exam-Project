import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;