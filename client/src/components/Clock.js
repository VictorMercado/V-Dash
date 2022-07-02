import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';
import PropTypes from 'prop-types';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            toggle: true,
            counter: 0
        };
    }
    static propTypes = {
        title: PropTypes.string
    };
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState(
            {date: new Date(),
            counter: this.state.counter + 1}
        );
    }
    render() {
        // console.log(this.props.toggle);
        if (this.state.toggle) {
            return (
                <div className='bg-teal-600'>
                <h1>{this.props.title}</h1>
                <h1> {this.state.date.toLocaleTimeString()} </h1>
                {/* <p>{this.state.counter % 5 === 0 ? this.state.counter: "" }</p> */}
                <Toggle />
                </div>
                );
        }
        return (
        <div className='bg-teal-600'>
            <h1>{this.props.title}</h1>
            <h1> {this.state.date.toLocaleTimeString()} </h1>
        </div>
        );
    }
};

// Clock.propTypes = {

// };

export default Clock;
