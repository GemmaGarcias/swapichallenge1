import React, { useEffect, useState } from 'react';
import { getFilmsRequest } from '../../service/content.service';
import SimpleAccordion from '../common/SimpleAccordion';
import FilmsCharacters from '../FilmsCharacters/FilmsCharacters';

function FilmsView() {

  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilmsRequest();

      setFilms(response.data);
      setIsLoading(false);
    }

    if(isLoading) fetchData();
  }, [])
  
    return (
    <div className="Films-container"> 
        {isLoading ? <p className="Films-loading">Wait Im Loading comments for you</p> 
        : <h1 className={"Films-title"}>FILMS</h1>}
        
        <div className="Films-container">
            {films && films.results.map((film, i) => (
                <SimpleAccordion key={i} data={film}>
                  <FilmsCharacters film={film}/>
                </SimpleAccordion> 
            ))}
        </div>
    </div>
  );
}

export default FilmsView;
