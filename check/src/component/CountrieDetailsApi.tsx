import axios from 'axios';
import { useEffect, useState } from 'react';

interface CountriesDetails {
  name: string;
  capital: string;
  currency: string;
}

const CountrieDetailsApi = () => {
  const [countriesDetails, setCountriesDetails] =
    useState<CountriesDetails[]>();

  useEffect(() => {
    const apiUrl = 'https://countries.nausicaa.wilders.dev/';
    const countriesDetailsQuery = `
      query {
        countries {
          name
          capital
          currency
        }
      }
    `;
    const url = `${apiUrl}?query=${encodeURIComponent(countriesDetailsQuery)}`;

    axios
      .get(url)
      .then((response) => {
        setCountriesDetails(response.data.data.countries);
        console.log('response', response.data.data.countries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {countriesDetails && countriesDetails.length > 0 ? (
        <ul>
          {countriesDetails.map((country) => (
            <li key={country.name}>
              <span>Nom : {country.name}</span>
              <span>Capital : {country.capital}</span>
              <span>Devise : {country.currency}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun pays trouvé.</p>
      )}
    </>
  );
};

export default CountrieDetailsApi;
