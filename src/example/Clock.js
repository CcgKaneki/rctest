import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:new Date()
        }
    }
    componentDidMount(){
        this.timerId=setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render() { 
        return (
            <h6>{this.state.date.toLocaleString()}</h6>
        );
    }
}
 
export default Clock;