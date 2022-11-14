import { useState, useEffect } from 'react';

import Repos from '/src/components/Repos';

import axios from 'axios';

import './repo-list.css';


const Repolist = () => {
  const [repos, setRepos] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      // setLoading(true);
      const res = await axios.get('https://api.github.com/users/IniomohAngela/repos');
      setRepos(res.data);
      setIsLoading(false);                             
    }

    fetchRepos();
}, []);

  //Get current repos
  const indexofLastRepo = currentPage * reposPerPage;
  const indexofFirstRepo = indexofLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexofFirstRepo, indexofLastRepo);

  const pageNumbers = [];
  const totalRepos = repos.length
  for(let i = 1; i <=Math.ceil(totalRepos / reposPerPage); i++){
    pageNumbers.push(i)
    }
    
  const Pagination = () => <nav>
     <ul className='pagination'>
       {pageNumbers.map(number => (
         <li key={number} className='page-item'>
           <a href="#" className="page-link" onClick={() => setCurrentPage(number)} >{number}</a></li>
       ))}
     </ul>
    </nav>

  
  return  (
    <div className='container mt-3'>
      <h1  className='text-primary mb-3'>My repositories</h1>
      <div>{currentRepos.map(((item) => <div key={item.id} >{item.name} </div>))} </div>
      <Pagination />
    </div>
  );
};


export default Repolist;
