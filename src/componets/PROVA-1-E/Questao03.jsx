import React, { useEffect, useState } from 'react';

const Capitais = () => {
  const [countriesData, setCountriesData] = useState([]); // Estado para armazenar os dados dos países

  useEffect(() => {
    fetchData(); // serve para pegar os dados dos paises 
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/region/europe?fields=capital,population'
      ); // atraves da API pega os dados dos países da Europa com as informações necessarias, no caso capital e populção 
      const data = await response.json(); // tranforma em Json 
      setCountriesData(data); // aramezena os dados do paises 
    } catch (error) {
      console.log(error);
    }
  };

  const findMaxMinPopulation = () => {
    let maxPopulationCountry = null; // maior população 
    let minPopulationCountry = null; // menor população 


    // os codigos em baixo verifica a menor população e a maior 
    countriesData.forEach((country) => {
      const population = country.population;
    
      if (!maxPopulationCountry || population > maxPopulationCountry.population) {
        maxPopulationCountry = country;
      }

      if (!minPopulationCountry || population < minPopulationCountry.population) {
        minPopulationCountry = country;
      }
    });

    // essa função serve para renderizar as capitaais com maior e menor população 
    if (maxPopulationCountry && minPopulationCountry) {
      return (
        <div>
          <p>País com maior população: {maxPopulationCountry.capital[0]}</p>
          <p>País com menor população: {minPopulationCountry.capital[0]}</p>
        </div>
      ); 
    }
    return null;
  };

  return <div>{findMaxMinPopulation()}</div>;
};

export default Capitais;
