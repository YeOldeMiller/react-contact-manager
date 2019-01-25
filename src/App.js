import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import ContactList from './components/contacts/ContactList';
import AddContactForm from './components/contacts/AddContactForm';
import EditContactForm from './components/contacts/EditContactForm';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={ContactList} />
                                <Route exact path="/contact/add" component={AddContactForm} />
                                <Route exact path="/contact/edit/:id" component={EditContactForm} />
                                <Route exact path="/about" component={About} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
    