import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './styles/global.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const verifica = type === 'checkbox' ? checked : value;
    // console.log(verifica);
    // console.log(name, value, type, checked);
    this.setState({
      [name]: verifica,
    }, () => {
      this.validateFields();
    });
  };

  validateFields = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const maxAttr = 90;
    const maxSum = 210;
    const verifyAttr = attr1 > maxAttr || attr2 > maxAttr || attr3 > maxAttr;
    // console.log('atrib > 90?', verifyAttr);
    const verifyNegativeAttr = attr1 < 0 || attr2 < 0 || attr3 < 0;
    // console.log('atrib < 0?', verifyNegativeAttr);
    const verifySumAttr = (attr1 + attr2 + attr3) > maxSum;
    // console.log('soma > 210?', verifySumAttr);
    const verifyEmptyFields = cardName === '' || cardDescription === ''
                          || cardImage === '' || cardRare === '';
    // console.log('campos vazio?', verifyEmptyFields);
    const checkRules = verifyAttr || verifyNegativeAttr
                                  || verifySumAttr || verifyEmptyFields;
    // console.log('botao disabled?', checkRules);
    this.setState({
      isSaveButtonDisabled: checkRules,
    });
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    console.log(this.validateFields());
  };

  render() {
    // const tudo = { ...this.state };
    // console.log(tudo);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
