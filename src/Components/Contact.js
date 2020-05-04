import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }
    
    onClick= (isChecked) => {
        this.setState({
            isChecked: isChecked
        });
    }
    
    render() {
        return (
            <div>
                <p>Contact</p>
                <button classNames="btn btn-primary" onClick={() => {this.onClick(false)}}>Cho phep</button>
                <button classNames="btn btn-danger" onClick={() => {this.onClick(true)}}>Khong Cho phep</button>
                <Prompt
                    when={this.state.isChecked}
                    message={location => (`ban co chac chan di den ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default Contact;