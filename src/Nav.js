import React, { useState } from "react";
import data from "./data";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.png";
import "./nav.css";


// const getFiltereditems = (query, items) => {
//   if (!query) {
//     return items;
//   }
//   return items.filter(person => person.name.inludes(query))
// }
function Nav() {
  const [people, setPeople] = useState(data);


   //for the search bar
   const [query, setQuery] = useState("")

  // const {tracks} = data;
  // const {items} = tracks;

  // //filltered ites

  // const filtereditem = getFiltereditems(query, items)

  // The section of the handlechange
  const handleChange = (e) => {
    setPeople(e.target.value);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light py-3">
      <div className=" img container-fluid">
        <img src={logo} alt="rapple" className="header-img" />
      </div>
      {/* <h3>RAPPLE</h3> */}
      <div className="look container-fluid enroll-input">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange= {e => setQuery(e.target.value)}
          value={people}
          name="search"
        />
      </div>
            {/* <form className="d-block">
                <div className="input-group py-5 d-flex">                    
                    <input type="text" className="form-control" placeholder="Search" onChange={handleChange} value={people}/>
                    <button type="button" className="btn btn-secondary"><i class="bi-search"></i></button>
                 </div>
             </form> */}
    </nav>
  //  <List {fillteredItems.map} />
  );
}

export default Nav;
