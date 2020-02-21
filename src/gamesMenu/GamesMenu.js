import React from 'react';

class GamesMenu extends React.Component {

    loadGame() {
        this.props.loadGame('phonics');
    }

    render() {
        // const games = ['phonics', 'others'].forEach(());
        return <div>
                <h1>Menu</h1>
                <button onClick={(e) => {this.loadGame(e)}}>Load Game</button>
            </div>
    }
}

export default GamesMenu;