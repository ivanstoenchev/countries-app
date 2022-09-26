import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from "react-router"



function CountryDetails({ darkMode, countries, refetch }) {
    const params = useParams();
    const navigate = useNavigate();

    let name;
    let flagImg;
    let nativeName;
    let population;
    let region;
    let subregion;
    let capital;
    let topLevelDomain;
    let currencies = [];
    let languages = [];
    let borders = [];

    countries.forEach((country) => {
        if (country.alpha3Code === params.countryCode) {
            name = country.name;
            flagImg = country.flags.png;
            nativeName = country.nativeName;
            population = country.population;
            region = country.region;
            subregion = country.subregion;
            capital = country.capital;
            topLevelDomain = country.topLevelDomain;

            country.currencies?.forEach((currency) => {
                currencies.push(currency.name);
            });

            country.languages?.forEach((language) => {
                languages.push(language.name);
            });

            country.borders?.forEach((border) => {
                borders.push(border);
            });
        }
    });

    const goBack = () => {
        navigate("/");
    };

    return (
        <div className="country-details">
            <button className={`back ${darkMode ? 'darkMode' : ''}`} onClick={goBack}>
                <ArrowBackIcon />
                Go Back
            </button>

            <section className={`country-details-container ${darkMode ? 'darkMode' : ''}`}>
                <div className="img-container">
                    <img src={flagImg} alt={name} />
                </div>
                <div className="info">
                    <h2>{name}</h2>

                    <div className="info-container">
                        <section className="left-info">
                            <h6>Native name: {" "}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{nativeName}</span>
                            </h6>
                            <h6>Population: {" "}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{population}</span>
                            </h6>
                            <h6>Region: {" "}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{region}</span>
                            </h6>
                            <h6>Sub Region: {" "}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{subregion}</span>
                            </h6>
                            <h6>Capital: {" "}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{capital}</span>
                            </h6>
                        </section>

                        <section className="right-info">
                            <h6>Top Level Domain: {" "}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{topLevelDomain}</span>
                            </h6>
                            <h6>Currencies: {" "}
                                {currencies.map((currency) => {
                                    if (currencies.indexOf(currency) !== currencies.lenght - 1) {
                                        return (
                                            <span key={currency} className={`values ${darkMode ? 'darkMode' : ''}`}>{" "} {currency},</span>
                                        )
                                    } else {
                                        return (
                                            <span key={currency} className={`values ${darkMode ? 'darkMode' : ''}`}>{" "} {currency}</span>
                                        )
                                    }
                                })}

                            </h6>
                            <h6>Languages: {" "}
                                {languages.map((language) => {
                                    if (languages.indexOf(language) !== languages.lenght - 1) {
                                        return (
                                            <span key={language} className={`values ${darkMode ? 'darkMode' : ''}`}>{" "} {language},</span>
                                        )
                                    } else {
                                        return (
                                            <span key={language} className={`values ${darkMode ? 'darkMode' : ''}`}>{" "} {language}</span>
                                        )
                                    }
                                })}
                            </h6>

                        </section>
                    </div>
                    <section className="border-rules">
                        <h6>
                            Border Countries:
                            {borders.length ? (
                                borders.map((border) => {
                                    return (
                                        <div key={border} className={`border-countries ${darkMode ? 'darkMode' : ''}`}
                                            onClick={() => {
                                                refetch();
                                                navigate(`/${border}`);
                                            }}
                                        >
                                            <p>{border}</p>
                                        </div>
                                    )
                                })

                            ) : (
                                <div className={`value ${darkMode ? 'darkMode' : ''}`}>
                                    <p>No borders...</p></div>
                            )
                            }

                        </h6>
                    </section>

                </div>
            </section>
        </div>
    )
}

export default CountryDetails;