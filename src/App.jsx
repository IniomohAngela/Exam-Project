import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Repolist from './components/Pages/Repo/Repolist'
import Repo from './components/Pages/Repo/Repo';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import About from './components/Pages/About/About';
import Error from './components/Pages/Error/Error';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repos">
            <Route index element={<Repolist />} />
             <Route path=":repo" element={<Repo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;