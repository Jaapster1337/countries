import './App.css';
import map from './assets/world_map.png';
import axios from "axios";
import {useState} from "react";
import sort from "./helpers/sort.jsx";
import {regionColor} from "./helpers/region-color.jsx";
import Search from "./pages/Search.jsx";

function App() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [searchResult, setSearchResult] = useState('')


    async function fetchData() {
        setError('');
        try {
            const {data} = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(data);
        } catch (e) {
            console.error(e);
            setError("Data ophalen mislukt")
        }
    }
    sort(countries);

    async function fetchCountryData(){
        setError('');
        try{
            const {data} = await axios.get('https://restcountries.com/v3.1/name/{name}');
            setSearchResult(data)
            console.log(searchResult)
        } catch (e){
            console.error(e);
            setError("Data ophalen mislukt")
        }
    }

    return (
        <>
            <Search
            onclick={fetchCountryData}
            />
            <img className="map" src={map} alt={"World map"}/>
            <div className="fetchButton">
                <button type="button" onClick={fetchData}>Fetch data</button>
            </div>
            {error && <p className="error">{error}</p>}
            {countries.length > 0 &&
                <ul className="countryList">
                    {countries.map((country) => {
                        return <li key={country.name["common"]} className="country-info">
                            <div className={"flagNameTile"}>
                                <img src={country.flags["png"]} className="flagImage"/>
                                <p className={regionColor(country.region)}>{country.name["common"]}</p>
                            </div>
                            <p>Has a population of {country["population"]}</p>
                        </li>
                    })}
                </ul>
            }

        </>
    )
}


export default App
