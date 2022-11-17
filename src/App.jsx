import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import About from './components/Pages/About/About';
import RepoList from './components/Pages/Repo/RepoList'
import Page from './components/Pages/Error/Page'
import Repo from './components/Pages/Repo/Repo'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repos">
           <Route index element={<RepoList />} />
             <Route path=":repo" element={<Repo />} />
          </Route>
          <Route path="/404" element={<Page />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;