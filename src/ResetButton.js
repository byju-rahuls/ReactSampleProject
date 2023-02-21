import React from 'react';

class ResetButton extends React.Component
{
    render(){
    return (
        <button onClick={this.props.onClick}>Reset</button>
    )
    }
}

export default ResetButton