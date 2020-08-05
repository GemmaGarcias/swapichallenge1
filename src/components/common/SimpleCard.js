
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '300px',
    margin: '1vw',
    fontSize: 12,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { name, birth_year, height, mass, films, homeworld } = props.data;
  const otherFilms = films.join();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.pos} >
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <strong>Birthdate: </strong>{birth_year}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <strong>Height: </strong>{`${height} cm`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <strong>Weight: </strong>{`${mass} kg`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <strong>Other movies: </strong>{otherFilms}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <strong>Native planet: </strong>{homeworld}
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      birth_year: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
      films: PropTypes.array,
      homeworld: PropTypes.string
    })
}