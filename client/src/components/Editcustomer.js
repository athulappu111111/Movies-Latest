import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Editcustomer extends Component {

  constructor(props) {
    super(props)

    this.onChangecustomerfname = this.onChangecustomerfname.bind(this);
    this.onChangecustomerlname = this.onChangecustomerlname.bind(this);
    this.onChangecustomerEmail = this.onChangecustomerEmail.bind(this);
    this.onChangecustomerpassword = this.onChangecustomerpassword.bind(this);
    this.onChangecustomerphoneno = this.onChangecustomerphoneno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      phoneno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/customers/edit-customer/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          fname: res.data.fname,
          lname: res.data.lname,
          email: res.data.email,
          password: res.data.password,
          phoneno: res.data.phoneno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangecustomerfname(e) {
    this.setState({ fname: e.target.value })
  }
  onChangecustomerlname(e) {
    this.setState({ lname: e.target.value })
  }
  onChangecustomerEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangecustomerpassword(e) {
    this.setState({ password: e.target.value })
  }

  onChangecustomerphoneno(e) {
    this.setState({ phoneno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const customerObject = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      phoneno: this.state.phoneno
    };

    axios.put('http://localhost:4000/customers/update-customer/' + this.props.match.params.id, customerObject)
      .then((res) => {
        console.log(res.data)
        console.log('customer successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to customer List 
    this.props.history.push('/customer-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.fname} onChange={this.onChangecustomerfname} />
        </Form.Group>

        <Form.Group controlId="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lname} onChange={this.onChangecustomerlname} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangecustomerEmail} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" value={this.state.password} onChange={this.onChangecustomerpassword} />
        </Form.Group>

        <Form.Group controlId="phoneno">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="text" value={this.state.phoneno} onChange={this.onChangecustomerphoneno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Customer
        </Button>
      </Form>
    </div>);
  }
}
