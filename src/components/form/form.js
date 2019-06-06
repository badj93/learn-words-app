import React, { Component } from 'react'
import InputWords from '../input-words/input-word'
import Button from '../button/button'
import { connect } from "react-redux"
import { updateWords } from '../../actions'

class Form extends Component {

  state = {
    wordRu: null,
    wordEn: null
  };

  addWord = (e) => {
    e.preventDefault();
    if (this.state.wordEn !== '' && this.state.wordRu !== '') {
      this.props.addWordList(this.state.wordRu, this.state.wordEn);
    }
  };

  onChangeRu = (e) => {
    this.setState({ wordRu: e.target.value })
  };

  onChangeEn = (e) => {
    this.setState({ wordEn: e.target.value })
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <form>
            <InputWords
              labelText="Добавить слово в базу на английском"
              placeholder="Введите слово"
              descInput="Можно ввести слово/словосочетание/предложение"
              idName="input1"
              classTitle="form-control"
              onChange={ this.onChangeRu }
            />
            <InputWords
              labelText="Введите перевод слова на русском"
              placeholder="Введите перевод"
              descInput="Перевод можно вводить через запятую"
              idName="input2"
              classTitle="form-control"
              onChange={ this.onChangeEn }
            />
            <Button
              classTitle="btn btn-primary"
              title="Добавить"
              onClick={ this.addWord }
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWordList: (wordRu, wordEn) => dispatch(updateWords({ wordRu, wordEn }))
  }
};

export default connect(null, mapDispatchToProps)(Form);
