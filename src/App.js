
import React ,{ Fragment, useState , useEffect} from 'react';
import Header from './components/Header'
import PanelL from './components/PanelL'
import PanelM from './components/PanelM'
import PanelR from './components/PanelR'
import axios from 'axios'

var hashmap = new Map();
function App() {
 
  //get list of countries
  const [countries, setCountries]=useState([])
  const [country, setCountry]=useState([])
  const [countryInfo, setCountryInfo]=useState([])
  const [countryCounter, setCountryCounter]=useState({})
  
 

  console.log("hashmap",countryCounter)

  const options = {
    method: 'GET',
    url: 'https://country-info.p.rapidapi.com/',
    headers: {
      'x-rapidapi-host': 'country-info.p.rapidapi.com',
      'x-rapidapi-key': '534a86bf80msh34cb37d6c495147p150694jsnea12247ef1e7'
    }
  };
 
  useEffect(()=>{
    console.log("load countries")
    

    
    axios.request(options).then(function (response) {
      
      setCountries(response.data)
    }).catch(function (error) {
      console.error(error);
    });
    


  },[])
  const getCountryInfo=(info)=>{
      console.log("hola2",info)
      setCountryInfo(info)
      var _name=info.name
      console.log("name",_name)
      if(isKeyExists(countryCounter,_name)){
        setCountryCounter({...countryCounter,[_name]:[countryCounter[_name][0]+1,info]})
      }else{
        setCountryCounter({...countryCounter,[_name]:[1,info]})
      }

      
      
    }

    function isKeyExists(obj,key){
      if( obj[key] == undefined ){
          return false;
      }else{
          return true;
      }
  }


  return (
   <>
   <Header/>
  
   <div className="container">
    <div className="row">
      <div className="col panel-main">
        <PanelL
        countries={countries}
        getCountryInfo={getCountryInfo}
        />

      </div>
      <div className="col-6 panel-main">
        <PanelM
        countryInfo={countryInfo}
        />
      </div>
      <div className="col panel-main">
      <PanelR
       
        countryCounter={countryCounter}
        getCountryInfo={getCountryInfo}
      />
      </div>
    </div>
  
  </div>
   </>
  );
}

export default App;
