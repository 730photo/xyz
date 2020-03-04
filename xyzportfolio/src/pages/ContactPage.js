import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';

import Axios from 'axios';

//this is a class based component because we're going to need to manage state
class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        // form structure
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: 'false',
            emailSent: 'null',
        }
    }

    handleChange = (event) => {

        const target = event.target
        // if the type of the input is a checkbox, then it's gonna = checked. otherwise, it's just gonna = whatever the value is
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        // to stop the page from refreshing once we hit submit button
        event.preventDefault();

        this.setState({
            // disables the ability for someone to submit twice
            disabled: true,
        });

        // Axios.post('/api/email', this.state)
        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {

                this.setState({
                    disabled: false,
                    emailSent: true
                });
              } else { 
                this.setState({
                    disabled: false,
                    emailSent: false
                });
              }
            })

            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }) 
    }

render() { 
    return(
        <div>
            <Hero title={this.props.title} />
            <Content>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                

                <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>

                    <Button className="d-inline-block" variant="primary" type="submit" disabled={false}>
                        Send
                    </Button>

                    {/* Let's the user know if it did or did not send successfully */}
                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent!</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent!</p>}


                    </Form>
            </Content>
        </div>
    );
}
    }
export default ContactPage;