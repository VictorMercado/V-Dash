import PropTypes from 'prop-types';
import React, { Component } from 'react';

// export class Toggle extends Component {
//   static propTypes = {};

//   render() {
//     return <div></div>;
//   }
// }


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        
        this.dude = "yes";
    }

    handleClick() {
        this.setState(prevState => ( { isToggleOn: !prevState.isToggleOn } ) );
    }

    render() {
        return (
            <button onClick={this.handleClick } >
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;
