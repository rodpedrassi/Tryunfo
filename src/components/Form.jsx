import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onSaveButtonClick, onInputChange } = this.props;

    console.log(hasTrunfo);

    return (
      <section>
        <form action="">
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              name="cardName"
              id="nome"
              data-testid="name-input"
              placeholder="Digite o nome da Carta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <textarea
              name="cardDescription"
              id="descricao"
              data-testid="description-input"
              cols="30"
              rows="5"
              placeholder="Descreva sua carta"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atributo1">
            <br />
            <br />
            Atributo 1:
            <input
              type="number"
              name="cardAttr1"
              id="atributo1"
              data-testid="attr1-input"
              placeholder="0-90"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atributo2">
            Atributo 2:
            <input
              type="number"
              name="cardAttr2"
              id="atributo2"
              data-testid="attr2-input"
              placeholder="0-90"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atributo3">
            Atributo 3:
            <input
              type="number"
              name="cardAttr3"
              id="atributo3"
              data-testid="attr3-input"
              placeholder="0-90"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="img">
            Caminho da Imagem:
            <input
              type="text"
              name="cardImage"
              id="img"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            Raridade:
            <select
              name="cardRare"
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="" selected disabled hidden>Escolha...</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo">
            Super Trunfo:
            <input
              type="checkbox"
              name="cardTrunfo"
              id="super-trunfo"
              className="s-trunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Save
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
