import React from 'react';

class Options extends React.Component {
  
  onOptionSelected(e) {
    e.preventDefault();

    if (e.target.value === this.props.correctAnswer) {
      console.log('OPTION CORRECTA');
      this.props.updateOptionsList()
    } else {
      console.log('OPTION INCORRECTA');
    }
  }

  render() {
    const optionsList = this.props.optionsList.map((option) => {
            return <li key={option}>
              <button onClick={(e) => this.onOptionSelected(e)} value={option}>{option}</button>
              </li>;
        }
    );
    return <ul>{optionsList}</ul>;
  }
}

export default Options;
