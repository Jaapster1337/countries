import globe from '../assets/globe.png';
import {CountryCard} from "../components/CountryCard.jsx";


const Search = ({onclick, searchResult, setQuery}) => {
    function handleChange(e) {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <>
            <section className="static-content">
                <div className={"globeImg"}>
                    <img className={"globe"} src={globe}/>
                </div>
                <div className="searchButton">
                    <input type="text" id="searchField" name="searchField" onChange={handleChange}/>
                    <button type="button" onClick={onclick}>Zoeken</button>
                </div>
                {/*{console.log(searchResult.flags["png"])}*/}
                {Object.keys(searchResult).length > 0 &&
                    <CountryCard
                        flag={searchResult.flags["png"]}
                        countryName={searchResult.name["common"]}
                        region={searchResult.region}
                        capital={searchResult.capital}
                        population={searchResult.population}
                        amountOfBorders={searchResult.borders.length}
                        tld={searchResult.tld}
                    />}
            </section>
        </>
    );
};

export default Search;