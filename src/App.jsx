import './App.css';
import map from './assets/world_map.png';
import axios from "axios";
import {useEffect, useState} from "react";
import sort from "./helpers/sort.jsx";
import {regionColor} from "./helpers/region-color.jsx";
import Search from "./pages/Search.jsx";
import {millionFormat} from "./helpers/millionFormat.jsx";

function App() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [searchResult, setSearchResult] = useState('')
    const [query, setQuery] = useState('');

    async function fetchData() {
        setError('');
        try {
            const {data} = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(data);
        } catch (e) {
            // console.error(e);
            setError("Data ophalen mislukt")
        }
    }

    sort(countries);

    async function fetchCountryData() {
        setError('');
        // console.log('https://restcountries.com/v3.1/name/'+query)
        try {
            const {data} = await axios.get('https://restcountries.com/v3.1/name/' + query);
            if (Object.keys(data).length > 1) {
                for (const entry in data) {
                    //console.log("entry= ", data[entry].name.common)
                    if (data[entry].name["common"].toLowerCase() === query) {
                        setSearchResult(data[entry])
                    }
                }
            } else{
                setSearchResult(data[0])
            }

        } catch (e) {
            setSearchResult("")
            if (e.response.status === 404) {
                setError(query + " bestaat niet. Probeer opnieuw")
            } else {
                setError("Data ophalen mislukt")
            }
        }
    }


    return (
        <>
            {error && <p className="error">{error}</p>}
            <Search
                onclick={fetchCountryData}
                searchResult={searchResult}
                setQuery={setQuery}
            />
            <img className="map" src={map} alt={"World map"}/>
            <div className="fetchButton">
                <button type="button" onClick={fetchData}>Fetch data</button>
            </div>

            {countries.length > 0 &&
                <ul className="countryList">
                    {countries.map((country) => {
                        return <li key={country.name["common"]} className="country-info">
                            <div className={"flagNameTile"}>
                                <img src={country.flags.png} className="flagImage"/>
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
