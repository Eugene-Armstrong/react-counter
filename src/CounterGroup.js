import React, { Component } from 'react';
import Counter from '../src/Counter'
export default class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {sum : 0}
    }
    sum = (s) =>{
        this.setState({sum:s+this.state.sum})
    }
    countAll(){
        var buttonLists = [], counterNum = this.props.size, i;
        for (i = 0; i < counterNum; i = i + 1) {
            buttonLists.push(<Counter s={this.sum}/>);
        }
        return buttonLists;
    }
    render() {
        return (
        <div>
            {this.countAll()}
            <span>Counting The Summary : {this.state.sum}</span>
        </div>
        )
    }
}