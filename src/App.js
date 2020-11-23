import logo from "./logoek.svg";
import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App() {
 
  
  return (
    <div className="App">
      <h3>Contact Page</h3>
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="john doe" />
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
      <Form.Label>Subject</Form.Label>
      <Form.Control type="text" placeholder="you subject" />
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="your message"/>
      <Button type="submit" className="mb-2">
      Submit
      </Button>
    </div>
  );
}

export default App;
