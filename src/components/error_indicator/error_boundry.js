import React, { Component } from 'react';

import ErrorIndicator from '../error_indicator/error_indicator';


export default class ErrorBoundry extends Component {

    state = {
        hasError: false,
    }

    componentDidCatch() {
        console.log('componentDidCatch Error');
        this.setState({
            hasError: true,
        })
    }

    render() {

        if (this.state.hasError) {
            return <div className="d-flex justify-content-center mt-5"><ErrorIndicator /></div>
        }

        return this.props.children;
    }
}