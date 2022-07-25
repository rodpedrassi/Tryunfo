import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <section>
        <form action="">
          <div>
            <label htmlFor="nome">
              Nome:
              <input
                type="text"
                name="nome"
                id="nome"
                data-testid="name-input"
                placeholder="Digite o nome da Carta"
              />
            </label>
          </div>
          <div>
            <label htmlFor="descricao">
              Descrição:
              <textarea
                name="descricao"
                id="descricao"
                data-testid="description-input"
                cols="30"
                rows="5"
                placeholder="Descreva sua carta"
              />
            </label>
          </div>
          <div>
            <label htmlFor="atributo1">
              Atributo 1:
              <input
                type="number"
                name="atributo1"
                id="atributo1"
                data-testid="attr1-input"
                placeholder="0-90"
              />
            </label>
          </div>
          <div>
            <label htmlFor="atributo2">
              Atributo 2:
              <input
                type="number"
                name="atributo2"
                id="atributo2"
                data-testid="attr2-input"
                placeholder="0-90"
              />
            </label>
          </div>
          <div>
            <label htmlFor="atributo3">
              Atributo 3:
              <input
                type="number"
                name="atributo3"
                id="atributo3"
                data-testid="attr3-input"
                placeholder="0-90"
              />
            </label>
          </div>
          <div>
            <label htmlFor="img">
              Caminho da Imagem:
              <input
                type="text"
                name="img"
                id="img"
                data-testid="image-input"
              />
            </label>
          </div>
          <label htmlFor="raridade">
            Raridade:
            <select name="raridade" id="raridade" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <div>
            <label htmlFor="super-trunfo">
              Super Trunfo:
              <input
                type="checkbox"
                name="super-trunfo"
                id="super-trunfo"
                data-testid="trunfo-input"
              />
            </label>
          </div>
          <div>
            <button type="submit" data-testid="save-button">Save</button>
          </div>
        </form>
      </section>
    );
  }
}
