import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Box, Typography } from "@material-ui/core";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";
import { Root, Header, Nav, Content, Footer } from "mui-layout";
import Card from './components/Card'
import Drawer from './components/Navigation'
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
    "md": "relative"
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
      <Root config={config}>
        <Header
          renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
        />
        <Nav
          renderIcon={collapsed =>
            collapsed ? <ChevronRight /> : <ChevronLeft />
          }
        >
          <Drawer></Drawer>
        </Nav>
        <Content>
          <Box p={{ xs: 2, sm: 3 }}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

          </Box>
        </Content>
        <Footer>Footer</Footer>
      </Root>
    </ThemeProvider>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);