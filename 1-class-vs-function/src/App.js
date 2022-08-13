import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // method bind
    this.handleDescription = this.handleDescription.bind(this);

    this.state = {
      description: 'Edit src/App.js and save to reload.',
      counter: 0
    };
  }

  // método sintetico 
  // com essa declaraçao é necessário usar um method bind
  handleDescription () {
    this.setState({ description: 'Edite src/App.js e salve para recarregar.' });
  }

  // com a declaração arrow function ele consegue ler o this e não é necessário o bind
  handleLink = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
  
  render() {
    const { description, counter } = this.state;

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handleDescription}>
          {description}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.handleLink}
        >
          Learn React {counter}
        </a>
      </header>
    </div>
    );
  };
};

export default App;
