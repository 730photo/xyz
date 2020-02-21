import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

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
        <p>Hi from React</p>
      </Container>
    </Router>
      );
  }
  
}

export default App;
