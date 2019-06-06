import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"
import store from './store'
import WordstoreService from './api-service/api-service'
import { WordstoreServiceProvider } from "./components/wordstore-service-context/wordstore-service-context";
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const wordstoreService = new WordstoreService();

ReactDOM.render(
  <Provider store={ store }>
    <WordstoreServiceProvider value={ wordstoreService }>
      <Router>
        <App/>
      </Router>
    </WordstoreServiceProvider>
  </Provider>
  ,
  document.getElementById('root'));

