import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext(),
    reducer = (state, { type, payload }) => {
        switch(type) {
            case 'DELETE_CONTACT':
                return {
                    ...state,
                    contacts: state.contacts.filter(({ id }) => id !== payload)
                };
            case 'ADD_CONTACT':
                return {
                    ...state,
                    contacts: [ payload, ...state.contacts ]
                };
            case 'UPDATE_CONTACT':
                return {
                    ...state,
                    contacts: [ payload, ...state.contacts.filter(({ id }) => id !== payload.id) ]
                };
            default:
                return state;
        }
    }

export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => 
        this.setState(state =>
        reducer(state, action))
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => this.setState({ contacts: data }));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;