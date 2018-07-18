import React, { Component } from 'react';
import Counter from '../src/Counter'
export default class CounterGroup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var buttonLists = [], n = this.props.size, i;
        for (i = 0; i < n; i = i + 1) {
            buttonLists.push(<div><Counter /></div>);
        }
        return (<div>{buttonLists}</div>)
    }
}