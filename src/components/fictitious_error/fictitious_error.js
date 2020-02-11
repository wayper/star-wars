import React, { Component } from 'react';

export default class FictitiousError extends Component {

    state = {
        errorForChecking: false,
    }

    render() {
        const { errorForChecking } = this.state;

        if ( errorForChecking ) {
            this.foo.bur = 0;
        }

        return (
            <button 
                type="button" 
                className="btn btn-danger mx-2"
                onClick={()=>{this.setState({errorForChecking: true})}}>Error</button>
        );
    };
}