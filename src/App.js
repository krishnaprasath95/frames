import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,Redirect,useLocation} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Baby from './Components/Gallery/Baby/Baby';
import Wedding from './Components/Gallery/Wedding/Wedding';
import Maternity from './Components/Gallery/Maternity/Maternity';
import Contact from './Components/Contact/Contact';
import WeddingFilm from './Components/WeddingFilm/WeddingFilm';
import Sidebar from './Components/Navigator/Sidebar';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
    const location=useLocation();
    const {pathname} = useLocation();

    useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);  
  return (
    <>
    <Sidebar/>
    <div className="main">
    <Switch location={location} >
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/wedding" component={Wedding} />
      <Route exact path="/baby" component={Baby} />
      <Route exact path="/maternity" component={Maternity}/>
      <Route exact path="/weddingfilm" component={WeddingFilm}/>
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    </div>
    <Footer/>
    </>
  );
}

export default App;
