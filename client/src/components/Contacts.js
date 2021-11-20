import React, { Component } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

export default class Contacts extends Component {
    
    constructor(props) {
        super(props);
        // primarily what holds all the information in the data 
        // use specific UI/ T/F
        this.state = {
            contacts: [],
        };
    }

    // method that runs before it renders the component
    // fetch the data before it renders
    componentDidMount() {
        // fetch from the server from the URL
        fetch('http://localhost:8080/api/contacts')
        // get the response of the server and return it as json data
        .then(response => response.json())
        // with the data that we just created we can set the json data to the contacts array
        .then(data => this.setState({contacts: data}))
    }
    
    // comes from the component class
    render() {
        return (
            <div>
                <div className="row">
                    <AddContacts />
                </div>
                <div className="row">
                    { this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}