import React, {useState, useEffect} from 'react';
import '../App.css';


const SearchBeer = () => {

  const [beers, setBeers] =  useState([]);
  const [searchBeer, setSearchBeer] = useState([]);
  
  const getBeers = async () => {
    
    const response = await fetch('https://api.punkapi.com/v2/beers');

    setBeers(await response.json());
  }

  useEffect(() => {
    getBeers();
  }, []);

return(
  <>
    <div className="container mt-5">
      <h3>SEARCH</h3>
      <div className="d-flex ">
        <input className="searchbar" type="text" 
          placeholder="Search Your Beer" 
          value={searchBeer}
          onChange={(event) => {setSearchBeer(event.target.value)}}/>
        <input type="radio" checked id="By_Name" name="search" value="name"/>
        <label className="radio" for="By_Name">By Name</label>
        <input type="radio" id="By_Description" name="search" value="description"/>
        <label className="radio" for="By_Description">By Description</label>
      </div>
      <div className="row mt-5">
        
        {
          beers.filter((val) => {
            if (searchBeer == "") {
              return val
            } else if (val.name.toLowerCase().includes(searchBeer.toLowerCase()) || val.description.toLowerCase().includes(searchBeer.toLowerCase())) {
              return val
            } 
          }).map((val) => {
            return(
              <div>
                <div className="card w-100 mt-3">
                  <div className="card-body d-flex">
                    <div>
                      <img className="card-img" src={val.image_url} alt="Card_search"></img>
                    </div>
                    <div className="flex-block">
                      <h5 className="title float-left">{val.name}</h5>
                      <p className="card-text">{val.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }  
      </div>
    </div>
  </>
)


}
 
export default SearchBeer;


