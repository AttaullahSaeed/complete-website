import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact'
import Footer from './Footer';


const App = () => {
  return (
   <>
   
    <Header/>
    
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/services" component={Services}/>
   <Route exact path="/projects" component={Projects}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/contact" component={Contact}/>
   
   


   </Switch>
   
   
   <Footer/>
     
        
 </> )
  }
export default App;