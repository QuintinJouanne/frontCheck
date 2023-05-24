import axios from 'axios';
import { useState, useEffect } from 'react';

interface Continent {
  name: string;
}

const ContinentListAPI = () => {
  const [continents, setContinents] = useState<Continent[]>();

  useEffect(() => {
    const apiUrl = 'https://countries.nausicaa.wilders.dev/';
    const continents = `
      query {
        continents {
          name
          code
        }
      }
    `;
    const url = `${apiUrl}?query=${encodeURIComponent(continents)}`;

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
            <span>Nom : {continent.name}</span>
          ))}
        </ul>
      ) : (
        <p>Aucun continent trouvé.</p>
      )}
      ;
    </>
  );
};

export default ContinentListAPI;
