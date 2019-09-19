import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
