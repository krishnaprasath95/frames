import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Baby from './Components/Gallery/Baby/Baby';
import Wedding from './Components/Gallery/Wedding/Wedding';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Navigator/Sidebar';
import './App.css';

function App() {
  return (
    <>
    <Sidebar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/baby" component={Baby} />
      <Route exact path="/wedding" component={Wedding} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
