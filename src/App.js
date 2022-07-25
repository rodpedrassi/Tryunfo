import React from 'react';
import Form from './components/Form';
import './styles/global.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const verifica = type === 'checkbox' ? checked : value;
    console.log(verifica);
    console.log(name, value, type, checked);
    this.setState({
      [name]: verifica,
    });
  };

  render() {
    const tudo = { ...this.state };
    console.log(tudo);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
      </div>
    );
  }
}

export default App;
