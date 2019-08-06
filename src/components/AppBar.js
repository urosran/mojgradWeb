import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InsitutionsIcon from '@material-ui/icons/AccountBalance';
import VisibilityIcon from '@material-ui/icons/Visibility';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Map from '@material-ui/icons/Map';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Switch, NavLink } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 80,
    // alignContent: 'flex-center',
    // alignItems: 'center',
    paddingLeft: 1000,
    // {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
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
  toolbarCustom: {
    justifyContent: 'space-between'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  buttonCustom: {
    alignItems: "flex-end",
    alignContent: 'flex-end',
    color: 'silver'
  },
  navlink:{
      textDecoration: 'none',
      color: 'inherit'
  }
}));
var brand = (
  <div style={{marginTop:-20}}>
        uros
  </div>
);
function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/* <Typography>Uros</Typography> */}
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarCustom}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start" 
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Moj Grad 
          </Typography>
          <Button className={classes.buttonCustom}>
              Odjavi se
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
        {brand}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >

            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          {brand}
          <Drawer

            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>

      </nav>
      
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.object,
};

export default ResponsiveDrawer;
