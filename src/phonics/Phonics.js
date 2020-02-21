import React from 'react';
import AudioButton from './AudioButton';
import Options from './Options';
import list from './list';

class Phonics extends React.Component {

  constructor(props) {
    super(props);
    this.optionsLists = list;
    this.state = {
      currentOptionList: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.updateOptionsList = this.updateOptionsList.bind(this);
  }

  updateOptionsList() {
    let currentOptionList;
    if (this.state.currentOptionList + 1 === this.optionsLists.length) {
      currentOptionList = 0;
    } else {
      currentOptionList = this.state.currentOptionList + 1;
    }
    this.setState(() => ({
      currentOptionList: currentOptionList
    }));
  }

  exitGame() {
    this.props.loadGame('menu');
  }
  
  render() {
    return <div>
        <h1>The Phonics game</h1>
        <AudioButton/>
        <Options
         optionsList={this.optionsLists[this.state.currentOptionList].list}
         correctAnswer={this.optionsLists[this.state.currentOptionList].correctAnswer}
         updateOptionsList={this.updateOptionsList}
         />
        <div>
          <button onClick={this.updateOptionsList}>Otro</button>
        </div>
        <div>
          <button onClick={this.exitGame.bind(this)}>Salir</button>
        </div>
    </div>;
  }
}

export default Phonics;
