import React from 'react';
import GamesContainer from './gamesContainer/GamesContainer';


class App extends React.Component {


  render() {
    return <GamesContainer gameName={window.location.pathname.replace('/', '')}/>;
  }
}

export default App;
