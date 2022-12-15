import React, {Component} from "react";
export default class Hello extends Component 

{
    constructor(){
        super();
        this.state = {color: "red", digit: 0};

    }
    componentDidMount(){ 
        setTimeout(() => {
            this.setState({digit: 10}); }, 2000);
    }
    render(){
        return<div>
            <div onClick={() => {this.setState( {color: "yellow"})} } style={{backgroundColor: this.state.color}}>
                Hello
            </div>
            <div>{this.state.digit}</div>
            </div>

    }
}