import React from 'react';
import Header from '../../components/header/header'
import { Route, Switch } from 'react-router-dom'
import Home from '../../components/pages/home'
import './app.css';
import TableWords from "../table-words/table-words";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={ Home }/>
      </Switch>
      <TableWords/>
    </>
  );
}

export default App;
