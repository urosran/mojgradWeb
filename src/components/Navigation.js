import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, NavLink } from 'react-router-dom';
import Map from '@material-ui/icons/Map';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InsitutionsIcon from '@material-ui/icons/AccountBalance';
import VisibilityIcon from '@material-ui/icons/Visibility';

const drawerWidth=240

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    navlink:{
        textDecoration: 'none',
        color: 'inherit'
    }
  }));
  
    export default function ResponsiveDrawer(props) {
    // const { container } = props;
    const classes = useStyles();
    // const theme = useTheme();
    
    const drawer = (
        <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
        <NavLink to="/" className={classes.navlink} >
          <ListItem button>
            <ListItemIcon>{<DashboardIcon />}</ListItemIcon>
            <ListItemText primary={"Pocetna"} />
          </ListItem>
        </NavLink>

          <NavLink to="/wall" className={classes.navlink} >
            <ListItem button>
              <ListItemIcon>{<VisibilityIcon />}</ListItemIcon>
              <ListItemText primary={"Zid"} />
            </ListItem>
          </NavLink>
          <NavLink to="/institutions" className={classes.navlink} >
            <ListItem button>
              <ListItemIcon>{<InsitutionsIcon />}</ListItemIcon>
              <ListItemText primary={"Institucije"} />
            </ListItem>
          </NavLink>

          <NavLink to="/map" className={classes.navlink}>
            <ListItem button>
              <ListItemIcon>{<Map/>}</ListItemIcon>
              <ListItemText primary={"Mapa"} />
            </ListItem>
          </NavLink>
      </List>
        </div>
    );
    return(drawer)
}
