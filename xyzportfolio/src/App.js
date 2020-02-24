import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'architekxyz',
      //Everything we need for the navbar
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],

      home: {
        title: 'The Gallery',
        subtitle: 'Photography by me',
        text: 'Check me out',
      },

      about: {
        title: 'About Me',
        
      },

      contact: {
        title: 'Let\'s Talk',
        
      }
    }
  }

  render() {
    return (
    <Router>
      <Container className="p-0" fluid={true}>
        {/* expand="lg" to switch to toggle whenever screen size changes */}
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>architekxyz</Navbar.Brand>
          
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            {/* className="ml-auto" Links float to the right rather than to the left */}
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* whenever you are at the route path, render the corresponding component */}
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
        <Footer />
      </Container>
    </Router>
      );
  }
  
}

export default App;
