import React from 'react';
const PanelR= ({hashmap,countryCounter,getCountryInfo}) => {
   
   
    console.log("countryCounter",countryCounter)
    const orderedCountryCounter = Object.keys(countryCounter).sort().reduce(
        (obj, key) => { 
          obj[key] = countryCounter[key]; 
          return obj;
        }, 
        {}
      );
    
    return ( 
        <>
        <h5> Counter</h5>
       
       {Object.keys(orderedCountryCounter).map((country) => (
            <button 
                type="button" 
                key={country}
                className="btn btn-primary btn-lg btn-block"
                onClick={() => getCountryInfo(countryCounter[country][1])}
                >{country} {countryCounter[country][0]} </button>
 
        ))}
           
         
        </>
     );
}
 
export default PanelR;
