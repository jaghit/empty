import React, { Component } from 'react';

import Loading from './Loading';
import Signin from './Signin';

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        };
    }
    render() {
        if(this.state.loaded) {
            return(
                <Signin />
            );
        } else {
            return(
                <Loading />
            );
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            });
        }, 1000);
    }
}
