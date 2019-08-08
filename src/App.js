import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Box } from "@material-ui/core";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";
import { Root, Header, Nav, Content, Footer } from "mui-layout";
import Card from './components/Card'
import Drawer from './components/Navigation'
import Dashboard from './components/Dashboard'
// import "./styles.css";
const config = {
  "navAnchor": "left",
  "navVariant": {
    "xs": "temporary",
    "sm": "persistent",
    "md": "permanent"
  },
  "navWidth": {
    "xs": 240,
    "sm": 256,
    "md": 256
  },
  "collapsible": {
    "xs": false,
    "sm": false,
    "md": true
  },
  "collapsedWidth": {
    "xs": 64,
    "sm": 64,
    "md": 64
  },
  "clipped": {
    "xs": false,
    "sm": false,
    "md": false
  },
  "headerPosition": {
    "xs": "sticky",
    "sm": "sticky",
    "md": "fixed"
  },
  "squeezed": {
    "xs": false,
    "sm": false,
    "md": false
  },
  "footerShrink": {
    "xs": false,
    "sm": false,
    "md": false
  }
};
const theme = createMuiTheme();

export default function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Root config={config} styles={{marginTop: 200, alignContent:'center'}}>
        <Header
          renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}/>
        <Nav
          renderIcon={collapsed =>
            collapsed ? <ChevronRight /> : <ChevronLeft />
          }
        >
          <Drawer/>
        </Nav>
        <Content>
          <Box p={{ xs: 2, sm: 3 }}>
            <Dashboard/>
          </Box>
        </Content>
        <Footer>Footer</Footer>
      </Root>
    </ThemeProvider>
  );
}
