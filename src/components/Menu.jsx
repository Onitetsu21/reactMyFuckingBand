import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

let Menu = () =>{
  const classes = useStyles();
    return(
      <div className={classes.root}>
      <ButtonGroup variant="primary" color="primary" aria-label="text primary button group">
        <Button><Link to="/">Accueil</Link></Button>
        <Button><Link to="/Discographie">Discographie</Link></Button>
      </ButtonGroup>
    </div>
    )
}

export default Menu