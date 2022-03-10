import React from 'react';
const PanelM = ({countryInfo}) => {
    
    console.log(countryInfo)
    if(countryInfo.length===0){
        return null
    }
    return ( 
        <>
        <h5> Details</h5>
        <div className="card" >
            <img className="card-img-top" src={"https://countryflagsapi.com/png/"+countryInfo.name} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{countryInfo.name}</h5>
                <p className="card-text">
                {countryInfo.continent}
                <br/>
                {countryInfo.dialCode}
                <br/>
                {countryInfo.currencyCode}
                </p>
                
            </div>
        </div>
       
        </>
     );
}
 
export default PanelM;
