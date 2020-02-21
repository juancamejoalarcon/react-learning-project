import React from 'react';
import Phonics from '../phonics/Phonics';
import GamesMenu from '../gamesMenu/GamesMenu';

class GamesContainer extends React.Component {

    loadGame(gameName) {
      window.location.href = gameName;
    }
  
    render() {
      switch(this.props.gameName) {
        case 'phonics':
            return <Phonics loadGame={this.loadGame.bind(this)} />;
        case 'other':
          // code block
          break;
        default:
            return <GamesMenu loadGame={this.loadGame.bind(this)} />;
      }
    }
  }
  
export default GamesContainer;