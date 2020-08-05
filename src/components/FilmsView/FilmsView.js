import React, { useEffect, useState } from 'react';
import { getFilmsRequest } from '../../service/content.service';
import SimpleAccordion from '../common/SimpleAccordion';
import FilmsCharacters from '../FilmsCharacters/FilmsCharacters';
import Button from '@material-ui/core/Button';

function FilmsView() {

  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [displayCharacters, setDisplayCharacters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilmsRequest();

      setFilms(response.data);
      setIsLoading(false);
    }

    fetchData();
  }, [])
  
    return (
    <div className="Films-container"> 
        {isLoading ? <p className="Films-loading">Wait Im Loading comments for you</p> : <h1 className={"Films-title"}>FILMS</h1>}
        
        <div className="Films-container">
            {films ? films.results.map((film, i) => (
                <SimpleAccordion key={i} data={film}>
                  <div>
                    <Button onClick={setDisplayCharacters(!displayCharacters)}> See Characters...</Button>
                    {displayCharacters && <FilmsCharacters film={film}/>}
                  </div>
                </SimpleAccordion> 
            )) : <div>Error</div>}
        </div>
    </div>
  );
}

export default FilmsView;
