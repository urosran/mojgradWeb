import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import Card from './Card'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridScroll:{

  },
  cardCustom:{
    margin: 40,
    padding: 40,
    fontSize:100,
  }
}));

export default function Wall() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          
          <Grid item xs={12} sm={12} container 
              spacing={4}
              direction="column"
              justify="center"
              alignItems="center">
            <Card/>
            <Card/>
            <Card/>
           
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}
