import React from 'react';
const PanelL = ({countries,getCountryInfo}) => {
    console.log("panelR",countries)
    return ( 
        <>
        <h5> list of countries</h5>
        {countries.map((country) => (
            <button 
                type="button" 
                key={country.code}
                className="btn btn-primary btn-lg btn-block"
                onClick={() => getCountryInfo(country)}
                >{country.name} {country.flag}</button>
 
        ))}
        
        </>
     );
}
 
export default PanelL;
