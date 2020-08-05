import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2vw',
    color: '#282c34',
    textAlign: 'left'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const [displayCharacters, setDisplayCharacters] = useState(false);
  const { title, release_date, director, producer, opening_crawl } = props.data;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li><strong>Release date: </strong>{release_date}</li>
            <li><strong>Director: </strong>{director}</li>
            <li><strong>Producers: </strong>{producer}</li>
            <li><strong>Opening: </strong>{opening_crawl}</li>
          </ul>
        </AccordionDetails>
        <AccordionDetails>
          <div>
            <Button onClick={() => setDisplayCharacters(!displayCharacters)}> See Characters...</Button>
            {displayCharacters && props.children}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

SimpleAccordion.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      release_date: PropTypes.string,
      director: PropTypes.string,
      producer: PropTypes.string,
      opening_crawl: PropTypes.string
    }),
    children: PropTypes.element
}