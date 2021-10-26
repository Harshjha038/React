import React, {useState, useEffect} from 'react';
import '../App.css';


const AnotherBeer = () => {

  
  const [beerId, setBeerId] = useState(1)
  const [singleBeers, setSingleBeers] =  useState([]);

  const getSingleBeers = async () => {
    
    const responseSingleBeer = await fetch('https://api.punkapi.com/v2/beers/'+`${beerId}`);
    
    setSingleBeers(await responseSingleBeer.json());
  }

  useEffect(() => {
    getSingleBeers();
  }, []);


return(
  <>
    <div className="container mt-5">
      <div className="row">
            {
            singleBeers.map((singleVal) => {
                return(
                
                <div className="card w-100" id="cardbox">
                    <h3 className="title float-left" id="cardboxtitle">{singleVal.name}</h3>
                    <div className="card-body d-flex">
                    <div>
                        <img className="card-img" id="cardboximg" src={singleVal.image_url} alt="Card"></img>
                    </div>
                    <p className="card-text" id="cardboxtext">{singleVal.description}</p> 
                    </div>
                    <button className="btn btn-primary" onClick={()=>{
                            setBeerId(beerId + 1);
                        }}>Another Beer {beerId}</button>
                </div>
                )
            })
            }  
        </div>  
    </div>

    
  </>
)


}
 
export default AnotherBeer;


