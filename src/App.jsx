import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repos from './components/repos';
import Home from './components/Pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route  path= "/" element={<Home />} />
            <Route path="Repos" element={<Repos />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App