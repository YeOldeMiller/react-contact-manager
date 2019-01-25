import React, { Component } from 'react';
import { Consumer } from '../../context';
import FormInputGroup from '../layout/FormInputGroup';
import axios from 'axios';

class AddContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = ({ target: { name, value } }) => this.setState({ [name]: value });
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if(!name) return this.setState({ errors: { name: 'Name is required!' } });
        if(!email) return this.setState({ errors: { email: 'Email is required!' } });
        if(!phone) return this.setState({ errors: { phone: 'Phone number is required!' } });
        axios.post('https://jsonplaceholder.typicode.com/users/', { name, email, phone })
        .then(({ data }) => dispatch({ type: 'ADD_CONTACT', payload: data}));
        this.setState({ name: '', email: '', phone: '', errors: {} });
        this.props.history.push('/')  ;
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
           <Consumer>
               {value=> {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <FormInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="enter name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <FormInputGroup 
                                        type="email"
                                        label="Email"
                                        name="email"
                                        placeholder="enter email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <FormInputGroup 
                                        label="Phone"
                                        name="phone"
                                        placeholder="enter phone number"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" value="Add Contact"
                                        className="btn btn-block btn-light"
                                    />
                                </form>
                            </div>
                        </div>

                    );
                }}
            </Consumer>
        );
    }
}

export default AddContactForm;