import {render ,screen } from '@testing-library/react';
import App from './App';
import PanelL from './components/PanelL';

import PanelM from './components/PanelM';
import PanelR from './components/PanelR';


test('render countries app ',()=>{
    render(<App/>);
    screen.debug()
    const titleHeader= screen.getByText("Countries App");
    expect(titleHeader).toBeInTheDocument()
})


test('should render panel Left',()=>{
    render(<App/>);
    const titleLabel= screen.getByText("list of countries");
    expect(titleLabel).toBeInTheDocument()
})

test('should render panel right',()=>{
    render(<App/>);
    const titleLabel= screen.getByText("Counter");
    expect(titleLabel).toBeInTheDocument()
})


test('should render button for one country in panel Left',()=>{
    render(<PanelL countries={[
        {
            "name": "Afghanistan",
            "flag": "🇦🇫",
            "code": "AF",
            "dialCode": "+93",
            "continent": "Asia",
            "currencyCode": "AFN"
        }
    ]}/>);
    const countryName= screen.getByRole('button',{name:/Afghanistan/i});
    expect(countryName).toBeInTheDocument()
})

test('should render card details in panel middle',()=>{
    let countryInfo={
        "name": "Afghanistan",
        "flag": "🇦🇫",
        "code": "AF",
        "dialCode": "+93",
        "continent": "Asia",
        "currencyCode": "AFN"
    }
    render(<PanelM countryInfo={countryInfo}/>);
    const titleLabel= screen.getByText("Afghanistan");
    
    expect(titleLabel).toBeInTheDocument()
})

test('should render button for one country in panel rigth',()=>{
    render(<PanelR countryCounter={{
        "Afghanistan": [
            1,
            {
                "name": "Afghanistan",
                "flag": "🇦🇫",
                "code": "AF",
                "dialCode": "+93",
                "continent": "Asia",
                "currencyCode": "AFN"
            }
        ],
        "Åland Islands": [
            1,
            {
                "name": "Åland Islands",
                "flag": "🇦🇽",
                "code": "AX",
                "dialCode": "+358",
                "continent": "Europe",
                "currencyCode": "EUR"
            }
        ]
    }}/>);
    const countryName= screen.getByRole('button',{name:/Afghanistan/i});
    expect(countryName).toBeInTheDocument()
})


/*test('should render a list of countries', async ()=>{
   
})
*/
