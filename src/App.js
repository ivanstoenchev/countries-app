import './App.css';
import Country from './components/Country';
import CountryDetails from './components/CountryDeatails';
import Header from "./components/Header";
import ForwaredInput from './components/HeaderSubMenu';
import ForwaredSelect from './components/HeaderSelectInput'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const countriesInputRef = useRef([]);
  const regionRef = useRef();
  
  const navigate = useNavigate();


  const noCountries = countries.status || countries.message;

  const switchMode = () => {
    setDarkMode((prevState) => !prevState)
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    setCountries(data);

  };

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;
   
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${searchValue}`)
        const data = await response.json();

        setCountries(data);
      }

      try {
        fetchSearch()
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };

  const selectRegion = () => {
    const selectValue = regionRef.current.value;
   

    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(`https://restcountries.com/v2/region/${selectValue}`);
        const data = await response.json();

        if (selectValue === "All") {
          try {
            fetchData();
          } catch (error) {
            console.log(error);
          }
          return;
        }

        setCountries(data);
      };
      try {
        fetchSelect();
      } catch (error) {
        console.log(error)
      }
    }
  };

  // const addToRefs = (el) => {
  //   if (el && !countriesInputRef.current.includes(el)) {
  //     countriesInputRef.current.push(el);
  //   }
  //   console.log(countriesInputRef.current);
  // };

  const showDetails = (code) => {
    navigate(`/${code}`);
  };

  return (
    <>
      <Header onClick={switchMode} darkMode={darkMode} />
      <div className={`app ${darkMode ? 'darkMode' : ''}`}>
        <Routes>
          <Route path='/' element={<><div className='header-container'><ForwaredInput darkMode={darkMode} type="text" ref={countriesInputRef} placeholder="Search for a country..." onChange={searchCountries} /> 
                                     <ForwaredSelect darkMode={darkMode} ref={regionRef} onChange={selectRegion}/></div>
            <div className='countries'>
              {!noCountries ? (
                countries.map((country) => (
                  <Country darkMode={darkMode}
                    key={country.alpha3Code}
                    code={country.alpha3Code}
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    region={country.region}
                    flag={country.flags.png}
                    showDetails={showDetails}
                  />
                ))) : <p>No countries found...</p>}
            </div>
          </>} />

          <Route path="/:countryCode" element={<CountryDetails darkMode={darkMode} countries={countries} refetch={fetchData} />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
