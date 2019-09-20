import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
