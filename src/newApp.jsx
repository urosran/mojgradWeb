// import React from 'react';
//   import CssBaseline from '@material-ui/core/CssBaseline';
//   import MenuIcon from '@material-ui/icons/Menu';
//   import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
//   import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
//   import { Root, Header, Nav, Content, Footer } from './components/layout';
  
//   const config = {
//   "navAnchor": "left",
//   "navVariant": {
//     "xs": "persistent",
//     "sm": "temporary",
//     "md": "permanent"
//   },
//   "navWidth": {
//     "xs": 240,
//     "sm": 256,
//     "md": 256
//   },
//   "collapsible": {
//     "xs": false,
//     "sm": false,
//     "md": true
//   },
//   "collapsedWidth": {
//     "xs": 64,
//     "sm": 64,
//     "md": 64
//   },
//   "clipped": {
//     "xs": true,
//     "sm": true,
//     "md": false
//   },
//   "headerPosition": {
//     "xs": "sticky",
//     "sm": "sticky",
//     "md": "sticky"
//   },
//   "squeezed": {
//     "xs": false,
//     "sm": false,
//     "md": false
//   },
//   "footerShrink": {
//     "xs": true,
//     "sm": false,
//     "md": false
//   }
// };
  
//   const App = () => (
//     <Root config={config} style={{ minHeight: "100vh" }}>
//       <CssBaseline />
//       <Header
//         menuIcon={{
//           inactive: <MenuIcon />,
//           active: <ArrowBackIosIcon />
//         }}
//       >
//           {/* header goes here */}
//       </Header>
//       <Nav
//         collapsedIcon={{
//           inactive: <ArrowBackIosIcon />,
//           active: <ArrowForwardIosIcon />
//         }}
//         header={
//           // you can provide fixed header inside nav
//           // change null to some react element
//           ctx => null
//         }
//       >
//         {/* nav goes here */}
//       </Nav>
//       <Content>
//         {/* content goes here */}
//       </Content>
//       <Footer>{/* footer goes here */}</Footer>
//     </Root>
//   )
  
//   export default App