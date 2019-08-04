import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  tab: {
    fontSize: 25,
  },
  link:{
    textDecoration: 'none',

  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
  }

  return (
    // <Router>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        >
          <NavLink to="/" className={classes.link}>
            <Tab label="Dashboard" className={classes.tab}/>
          </NavLink>
          <NavLink to="/wall">
            <Tab label="Zid" />
          </NavLink>
        <Tab label="Profil" />
      </Tabs>
    </Paper>
    // </Router>
  );
}