import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchWords } from '../../actions'
import withWordstoreService from '../hoc/with-wordstore-service'
import './table-words.css'
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import WordList from "../word-list/word-list";

class TableWords extends Component {

  componentDidMount() {
    this.props.fetchWords();
  }

  render() {
    const { words, error, loading } = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator/>
    }

    return <WordList words={ words }/>
  }
}

const mapStateToProps = ({ words, loading, error }) => {
  return {
    words, loading, error
  }
};

const mapDispatchToProps = (dispatch, { wordstoreService }) => {
  return {
    fetchWords: fetchWords(wordstoreService, dispatch)
  }
};

export default withWordstoreService()(connect(mapStateToProps, mapDispatchToProps)(TableWords));
