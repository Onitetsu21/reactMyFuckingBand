import React from 'react';
import Menu from './components/Menu';
// import {home, discographie} from './pages';
import Home from './components/Home';
import Discographie from './components/Discographie';      
import Albums from './albums';
import Typography from '@material-ui/core/Typography';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Typography variant="h1" component="h2">
        MY F***ING BAND
      </Typography>
      
        
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Discographie" ><Discographie Albums={Albums}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
