import React, {useState, useEffect} from 'react';
import '../App.css';


const RandomBeer = () => {

    const [randomBeers, setRandomBeers] =  useState([]);
  
    const getRandomBeers = async () => {
    
    const responseRandomBeer = await fetch('https://api.punkapi.com/v2/beers/random');

    setRandomBeers(await responseRandomBeer.json());
  }

  useEffect(() => {
    getRandomBeers();
  }, []);

return(
  <>
    <div className="container mt-5">
      <div className="row">
            {
                randomBeers.map((RandomVal) => {
                return(
                    
                    <div className="card w-100" id="cardbox">
                    <h3 className="title float-left" id="cardboxtitle">{RandomVal.name}</h3>
                    <div className="card-body d-flex">
                        <div>
                        <img className="card-img" id="cardboximg" src={RandomVal.image_url} alt="Card"></img>
                        </div>
                        <p className="card-text" id="cardboxtext">{RandomVal.description}</p> 
                    </div>
                    <button className="btn btn-primary" onClick={()=>{
                            getRandomBeers();
                        }}>Random Non Alcholic Beer</button>
                    </div>
                )
                })
            }            
      </div>  
    </div>

  </>
)


}
 
export default RandomBeer;


