import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repos from './components/repolist';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css'



const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      // setLoading(true);
      const res = await axios.get('https://api.github.com/users/IniomohAngela/repos');
      setRepos(res.data);
      setLoading(false);                             
    }

    fetchRepos();
}, []);

  //Get current repos
  const indexofLastRepo = currentPage * reposPerPage;
  const indexofFirstRepo = indexofLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexofFirstRepo, indexofLastRepo);

  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  return loading ? <div>Loading....</div> : (
    <div className='container mt-3'>
      <h1  className='text-primary mb-3'>My App</h1>
      <div>{currentRepos.map(((item) => <div key={item.id} >{item.name} </div>))} </div>
      <Pagination  reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate} />
    </div>
  );
};


export default App;