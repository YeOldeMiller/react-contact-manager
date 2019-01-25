import React, { Component } from 'react';
import { Provider } from './context';
import Contacts from './components/contacts/ContactList';
import Header from './components/layout/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Manager" />
                    <div className="container">
                        <Contacts />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
    