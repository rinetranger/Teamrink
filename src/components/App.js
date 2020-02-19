import React from 'react';
import '../App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './header';
import About from './about';
import Main from './main';
import Service from './service';
import Contact from './contact';
import Footer from './Footer';

class App extends React.Component{
  render(){
   
    return (
      <React.Fragment>
      
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/service" component={Service}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
          <Footer />
        </Router>
       
      </React.Fragment>
    );
  }
}
export default App;


 