import React from 'react';
import './App.css';
import List from './list/List';

class App extends React.Component {
  render() {
    const buttonValues = ['phonetics', 'others'];
    return <List buttonValues={buttonValues} />;
  }
}

export default App;
