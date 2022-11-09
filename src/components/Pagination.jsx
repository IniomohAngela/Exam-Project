import React from 'react'

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <=Math.ceil(totalRepos / reposPerPage); i++){
    pageNumbers.push(i)
    }
  return(
    <nav>
     <ul className='pagination'>
       {pageNumbers.map(number => (
         <li key={number} className='page-item'>
           <a href="#" className="page-link" onClick={() => paginate()} >{number}</a></li>
       ))}
     </ul>
    </nav>
  )
}

export default Pagination;