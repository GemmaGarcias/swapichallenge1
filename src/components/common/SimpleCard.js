
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1vw'
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
  const { data } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.pos} >
          {data.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Birthdate: ${data.birth_year}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Height: ${data.height} cm`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Weight: ${data.mass} kg`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Other movies: ${data.mass} kg`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Native planet: ${data.mass} kg`}
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
      mass: PropTypes.string
    })
}