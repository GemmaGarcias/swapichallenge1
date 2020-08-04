import React, { useEffect, useState } from 'react';
import { getFilmsRequest } from '../../service/content.service';

function FilmsView() {

  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilmsRequest();
      console.log(response)
      setFilms(response.data);
      setIsLoading(false);
    }

    fetchData();
  }, [])
  
    return (
    <div className="Films-container"> 
        {isLoading ? <p className="Films-loading">Wait Im Loading comments for you</p> : <h1 className={"Films-title"}>FILMS</h1>}
        {films.results && films.results.map((film, i) => (
            <section key={i} className="Films-items">
                <h3>{film.title}</h3>
                <ul>
                    <li><strong>Release date: </strong>{film.release_date}</li>
                    <li><strong>Director: </strong>{film.director}</li>
                    <li><strong>liroducers: </strong>{film.producer}</li>
                    <li><strong>Oliening: </strong>{film.opening_crawl}</li>
                </ul>
            </section>
        ))}
    </div>
  );
}

export default FilmsView;
