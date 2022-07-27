import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <fieldset>
        <legend data-testid="name-card">{ cardName }</legend>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">
          Força:
          {' '}
          {cardAttr1}
          {' '}
        </span>
        <span data-testid="attr2-card">
          Agilidade:
          {' '}
          {cardAttr2}
          {' '}
        </span>
        <span data-testid="attr3-card">
          Inteligencia:
          {' '}
          { cardAttr3 }
          {' '}
        </span>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : ''}
      </fieldset>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
