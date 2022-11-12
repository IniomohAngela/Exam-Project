import React from 'react'

const Repos = ({ repos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='List-group mb-4'>
        <li className='List-group-item'>
          {repos.name}
        </li>
    </ul>
  );
};



export default Repos;