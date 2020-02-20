import React from 'react';

class Options extends React.Component {
  
  render() {
    const optionsList = this.props.optionsList.map((option) => {
            return <li key={option}>{option}</li>;
        }
    );
    return <ul>{optionsList}</ul>;
  }
}

export default Options;
