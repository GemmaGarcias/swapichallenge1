import axios from 'axios';

export const getFilmsRequest = async () => {
    const apiFilm = 'https://swapi.dev/api/films/';

    try {
        const response = await axios({ method: 'get', url: apiFilm });
        return response;
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