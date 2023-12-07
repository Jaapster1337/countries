import globe from '../assets/globe.png';





const Search = (onclick) => {
    return (
        <>
            {console.log(onclick)}
            <section className="static-content">
                <div className={"globeImg"}>
                    <img className={"globe"} src={globe}/>
                </div>
                <div className="searchButton">
                    <input type="text" id="searchField" name="searchField"/>
                    <button type="button" onClick={onclick}>Zoeken</button>
                </div>
            </section>
        </>
    );
};

export default Search;