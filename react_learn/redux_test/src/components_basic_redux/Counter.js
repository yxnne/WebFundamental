import React, { Component } from 'react'
import store from '../Store';
import * as Actions from '../Actions';

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = this.getOwnState();

      this.onChangeCallback = this.onChangeCallback.bind(this);

    }

    componentDidMount(){
        store.subscribe(this.onChangeCallback);
    }
    componentWillUnmount(){
        store.unsubscribe(this.onChangeCallback);
    }
    onChangeCallback(){
        this.setState(
            this.getOwnState()
        );
    }

    getOwnState(){
        const states = store.getState();
        return {
            number: states[this.props.caption]
        };
    }
    addOne(){
        store.dispatch(Actions.add(this.props.caption))

    }

    subOne(){
        store.dispatch(Actions.sub(this.props.caption))
    }
    
    render() {
        return (
        <div>
            <button onClick={()=>this.addOne()}>+</button>
                {this.state.number}
            <button onClick={()=>this.subOne()}>-</button>
        </div>
        )
    }
    
}
