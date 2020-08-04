import React, { useEffect, useState } from 'react';
import { getCharactersRequest } from '../../service/content.service';
import SimpleCard from '../common/SimpleCard';
import PropTypes from 'prop-types';

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
    <div> 
        <h4>CHARACTERS:</h4>
        <div className="Characters-container">
            {characters.length && characters.map((character, i) => (
                <SimpleCard key={i} data={character}/>
            ))}
        </div>
    </div>
  );
}

FilmsCharacters.propTypes = {
    film: PropTypes.shape({
      characters: PropTypes.object
    })
}

export default FilmsCharacters;