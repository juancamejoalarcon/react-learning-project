import React from 'react';

class List extends React.Component {
    
    render() {
        const buttonValues = this.props.buttonValues.map((button) => {
            const buttonCapitalized = button.charAt(0).toUpperCase() + button.slice(1);
            return <li>{buttonCapitalized}</li>
        });
        return <ul>{buttonValues}</ul>;
    }
}

export default List;