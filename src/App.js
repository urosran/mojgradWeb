import React, {Component} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header'
import Card from './components/Card'
import { Switch, Route } from 'react-router-dom';
import Wall from './components/Wall'
import NotFound from './components/notfound'
import Dashboard from './components/Dashboard'
import AppBar from './components/AppBar'
import Institutions from './components/Institutions'
import MapCustom from './components/Map'
import newApp from './newApp'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: "/"
    }
  }

  navigateTo(url){
    
    this.setState({
      view: url
    })
  }

  render(){
    return (
      <div>
        <AppBar/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/wall" component={Wall} />
          <Route path="/institutions" component={Institutions} />
          <Route path="/map" component={MapCustom} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;