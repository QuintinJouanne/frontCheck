import axios from 'axios';
import { useState, useEffect } from 'react';

interface Country {
  name: string;
}

interface Continent {
  name: string;
  countries: Country[];
}

const CountriesListApi = () => {
  const [continents, setContinents] = useState<Continent[]>();

  useEffect(() => {
    const apiUrl = 'https://countries.nausicaa.wilders.dev/';
    const query = `
      query {
        continents {
          name
          countries {
            name
          }
        }
      }
    `;

    const url = `${apiUrl}?query=${encodeURIComponent(query)}`;

    axios
      .get(url)
      .then((response) => {
        setContinents(response.data.data.continents);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {continents && continents.length > 0 ? (
        <ul>
          {continents.map((continent) => (
            <li key={continent.name}>
              <span>Nom du continent : {continent.name}</span>
              <ul>
                {continent.countries.map((country) => (
                  <li key={country.name}>Nom du pays : {country.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun continent trouvé.</p>
      )}
    </>
  );
};

export default CountriesListApi;
