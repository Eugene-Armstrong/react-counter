import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    remove = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.add}> + </button>&nbsp;&nbsp;
                <button onClick={this.remove}> - </button>&nbsp;&nbsp;
                <span>{this.state.count}</span><br /><br />
            </div>
        )
    }
}
export default Counter;