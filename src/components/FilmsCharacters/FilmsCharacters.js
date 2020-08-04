import React, { useEffect, useState } from 'react';
import { getCharactersRequest } from '../../service/content.service';

function FilmsCharacters(props) {

  const [characters, setCharacters] = useState([]);
  const { film } = props;

  useEffect(() => {
    const fetchData = async () => {
        await Promise.all(film.characters.map(async (film) => {
            const response = await getCharactersRequest(film);
            setCharacters(characters => [...characters, response.data]);
        }));
    }

    fetchData();
  }, [])
  
    return (
    <div className="Characters-container"> 
        <h4>CHARACTERS:</h4>
        {characters.length && characters.map((character, i) => (
            <p key={i}>{character.name}</p>
        ))}
    </div>
  );
}

export default FilmsCharacters;