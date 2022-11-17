import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import About from './components/Pages/About/About';
import RepoList from './components/Pages/Repo/RepoList'
import Error from './components/Pages/Error/Error'
import Page from './components/Pages/Error/Page'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repos" element={<RepoList />} />
          <Route path="/404" element={<Page />} />
            
           <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;