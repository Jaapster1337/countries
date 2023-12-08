import * as React from 'react';
import {millionFormat} from "../helpers/millionFormat.jsx";

export function CountryCard({flag, countryName, region, capital, population, amountOfBorders, tld}) {
    return (
        <>
            <section className="card">
                <div className="flagAndName">
                    <img src={flag} alt="flag"/>
                    <p>{countryName}</p>
                </div>
                <p>{(countryName)} is situated in {(region)} and the capital is {(capital)}</p>
                <p>It has a population of {millionFormat(population)} people and it borders with {(amountOfBorders)} neighbouring countries</p>
                <p>Websites can be found on <strong>{(tld)}</strong></p>
            </section>
        </>
    );
};