import React from 'react'

const Pagination = ({peoplePerPage, totalPost, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / peoplePerPage); i++) {
        pageNumbers.push(i)
    }

    // console.log(postsPerPage, totalPost, paginate);
    return (
       <nav style={{background: 'red'}}>
           <ul className='pagination'> 
{pageNumbers.map(number => (
    <li key={number} className='page-item'>
        <a onClick={() => paginate(number)} href='!#' className='page-link'>
            {number}
        </a>
    </li>
))}
           </ul>
       </nav>
    )
}

export default Pagination;
