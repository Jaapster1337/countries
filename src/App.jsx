import './App.css';
import map from './assets/world_map.png';
import axios from "axios";
import {useState} from "react";

function App() {
    const [countries, setCountries] = useState({});
    const [error, setError] = useState('');

    async function fetchData() {
        setError('');
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(response.data);
            console.log(response.data);

        } catch (e) {
            console.error(e);
            setError("Data ophalen mislukt")
        }

    }

    return (
        <>
            <img className="map" src={map} alt={"World map"}/>
            <button type="button" onClick={fetchData}>Fetch data</button>
            {error && <p className="error">{error}</p>}
            {countries.length > 0 &&
                <ul>
                    {countries.map((country) => {
                        return <li
                            key={country.name["common"]}>{country.name["common"]}
                            <img src={country.flags["png"]}/>
                            <p>Has a population of {country["population"]}</p>
                        </li>
                    })}
                </ul>
            }

        </>
    )
}


export default App
