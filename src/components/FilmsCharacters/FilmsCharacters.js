import React, { useEffect, useState } from 'react';
import { getDataRequest } from '../../service/content.service';
import SimpleCard from '../common/SimpleCard';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

function FilmsCharacters(props) {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
        }

        if(isLoading && characters.length === 0) fetchData();
    }, [isLoading, characters, film.characters])

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
    <Grid container spacing={2}>
        {characters && characters.map((character, i) => (
            <Grid key={i} xs={12} sm={12} md={4} item>
                <SimpleCard data={character}/>
            </Grid>
        ))}
    </Grid>
  );
}

FilmsCharacters.propTypes = {
    film: PropTypes.shape({
      characters: PropTypes.array
    })
}

export default FilmsCharacters;