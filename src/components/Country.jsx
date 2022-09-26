import React from "react";

function Country({darkMode, name, capital, population, region, flag, showDetails, code}) {
    const showDetailsHandler = () => {
        showDetails(code)
    }
    
    return (
        
            <section className={`country ${darkMode ?'darkMode' :''}`} onClick={showDetailsHandler}>
                <div className="flag-box">
                    <img src={flag} alt="" />
                </div>

                <section className="country-details">
                    <h3 className="country-name">{name}</h3>
                    <p className="country-population">Population:{" "} <span className={`value ${darkMode ?'darkMode' :''}`}>{population}</span></p>
                    <p className="country-region">Region:{" "} <span className={`value ${darkMode ?'darkMode' :''}`}>{region}</span></p>
                    <p className="country-capital">Capital:{" "} <span className={`value ${darkMode ?'darkMode' :''}`}>{capital}</span></p>
                </section>
            </section>
        
    )
}

export default Country;