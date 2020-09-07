import React, { Component } from 'react'
import './form.css'

export class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerEmail: '',
            subject: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handlChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("email = ", this.state.customerEmail, "/n subject = ", this.state.subject, "\n messate = ", this.state.message);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText);
        })
        xhr.open('POST', "http://localhost:9000/mywebsite");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            email:this.state.customerEmail,
            emailSubject:this.state.subject,
            message:this.state.message
        }));
    }

    render() {
        return (
            <div className="main-block">
                <h1>Send the Email</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>emailAddress : </label><br/>
                    <input type="email" id="customerEmail" onChange={this.handlChange} /><br /><br />
                    <label>Subject : </label>
                    <input type="text" id="subject" onChange={this.handlChange} /><br /><br />
                    <label>Message : </label><br/>
                    <textarea type="text" id="message" onChange={this.handlChange} /><br /><br />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default form;

