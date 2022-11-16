import React from 'react';

import { Link } from 'react-router-dom';

import Loading from '/src/components/LoadingSpinner/Loading'

const Repos = ({ repos, isLoading }) => {
    if (isLoading) {
    return <LoadingSpinner />;
  }

  return repos.map ((repo, index) => ( <div className="repo-card" key={repo.id}>
       <div>{repo.name}</div>

       <link className="link" to={`/repos/${repo.name}`} key={index}>
         <button href="#" className="btn">
           View More
           </button>
         </link>
      </div>
   ));
};

export default Repos;
