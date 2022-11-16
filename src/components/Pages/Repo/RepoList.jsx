import React from 'react';

import Repos from '/src/components/Repos';

import { useState, useEffect } from 'react';

import './repo-list.css';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(9);

  const totalRepos = repos.length;

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/IniomohAngela/repos');
      const fetchedRepos = await response.json();
      setRepos(fetchedRepos);
      setIsLoading(false);
    } catch (error) {
      console.log('Something went wrong', error);

    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <React.Fragment>
      <h1 className="title">MY Repo List</h1>

       <div className="each-repo">
        <Repos repos={currentRepos} isLoading={isLoading} />
      </div>


    </React.Fragment>
  );




};
export default RepoList;