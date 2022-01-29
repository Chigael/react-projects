import 'bootstrap/dist/css/bootstrap.css';
import  { useState } from 'react';
import Data from './data';

const List = () => {

  const [person, setPerson] = useState(Data);
  
  // const [del,setDel] = useState(data)

const deletePerson = (id) => {
  if (window.confirm('Do you want to remove this Person?')) {
    person.forEach((item, index) => {
      if (item === id) {
        person.splice(index, 1);
      }
    });

     setPerson([...person]);
    
  }
};
  return (
    <>
     {person.map((person) => {
         const { id, name, track, image} = person;
         return (
            <article key={id} className='person'>
            <div className='row col-xs-10 my-5'>
             <img src={image} alt={name} />

            
               <div>
                 <h4>{name}</h4>
                 <p>{track} developer</p>
                 </div>

                 </div>

                 <div className='row btnn col-xs-2'>
                 <button
                   className='btn btn-small btn-danger'
                   onClick={() => deletePerson(person)}
                  >
                   Clear
                 </button>
                 </div>
             {/* </div> */}
            
         </article>
          
         );
     })}
    </>
  );
};

export default List;