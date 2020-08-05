import axios from 'axios';

export const getFilmsRequest = async () => {
    const apiFilm = 'https://swapi.dev/api/films';

    try {
        return await axios({ method: 'get', url: apiFilm });
    } catch (error) {
        return error;
    }
};

export const getDataRequest = async (url) => {
    try {
        return await axios({ method: 'get', url });
    } catch (error) {
        return error;
    }
}