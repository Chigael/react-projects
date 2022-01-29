import React, { useState } from 'react';
import Data from './data';
import List from './List';
import Nav from './Nav.js';
import Pagination from './paginate/Pagination';
import Footer from './components/footer/Footer'

function App() {
  const [people,setPeople] = useState(Data);
  // const [posts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(5); 


  //get current post
  const indexOfLastPost = currentPage * peoplePerPage;
  const indexOfFirstPost = indexOfLastPost - peoplePerPage;
  const currentPeople = people.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
    <div><Nav /></div>
  
<main>

 <section className='container_main'>
    <h3>{people.length} TIIDELab Fellows</h3>
 <List people={currentPeople} />
 <button onClick={() => setPeople([])}>Clear all</button>
 <Pagination style={{background: 'red'}} peoplePerPage={setPeoplePerPage} totalPosts={people.length} paginate={paginate} />
 
 </section>
 
 </main>
 <Footer />
</div>
  );
}

export default App;