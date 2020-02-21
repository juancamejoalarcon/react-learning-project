import React from 'react';
import './App.css';
import GamesContainer from './gamesContainer/GamesContainer';


class App extends React.Component {


  render() {
    return <GamesContainer gameName={window.location.pathname.replace('/', '')}/>;
  }
}

export default App;
