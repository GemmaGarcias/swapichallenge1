import React, { useEffect, useState } from 'react';
import { getDataRequest } from '../../service/content.service';
import SimpleCard from '../common/SimpleCard';
import PropTypes from 'prop-types';

function FilmsCharacters(props) {

    const [characters, setCharacters] = useState([]);
    const { film } = props;

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all(film.characters.map(async (filmUrl) => {
                let response = await getDataRequest(filmUrl);
                const reponseFilms = await getOtherFilms(response.data);
                const reponsePlanet = await getNativePlanet(response.data);
                response = await {...response.data, films: reponseFilms, homeworld: reponsePlanet.data.name};
                
                setCharacters(characters => [...characters, response]);
            }));
        }

        fetchData();
    }, [])

    const getOtherFilms = async (data) => {
        let aFilms = [];
        await Promise.all(data.films.map(async (films) => {
            const otherFilms = await getDataRequest(films);
            aFilms = [...aFilms, otherFilms.data.title]
        }))
        return aFilms;
    }

    const getNativePlanet = async (data) => {
        return await getDataRequest(data.homeworld);
    }
  
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