import React from 'react';
import AudioButton from './AudioButton';
import Options from './Options';

class Phonics extends React.Component {
  
  render() {
    const optionsList = ['Uno', 'Dos', 'Tres'];
    return <div>
        <h1>The Phonics game</h1>
        <AudioButton/>
        <Options optionsList={optionsList}/>
    </div>;
  }
}

export default Phonics;
