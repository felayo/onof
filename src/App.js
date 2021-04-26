import { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Contact from "./components/Contact";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
       <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/events" component={Events}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
        {/* WhatsApp icon */}
          <a
            href="https://wa.me/2348036645879"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a>
      </div>
    );
  }
}

export default App;

