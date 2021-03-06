import React, { useEffect, useState } from 'react';
import { getFilmsRequest } from '../../service/content.service';
import SimpleAccordion from '../common/SimpleAccordion';
import FilmsCharacters from '../FilmsCharacters/FilmsCharacters';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
  }, [isLoading])
  
    return (
    <div className="Films-container"> 
        {isLoading ? <p className="Films-loading">Wait Im Loading comments for you</p> 
        : <Typography variant="h5" component="h2" className={"Films-title"} >
            FILMS
          </Typography>}
        <Container maxWidth="lg">
            {films ? films.results.map((film, i) => (
                <SimpleAccordion key={i} data={film}>
                  <FilmsCharacters film={film}/>
                </SimpleAccordion> 
            )) : <div></div>}
        </Container>
    </div>
  );
}

export default FilmsView;
