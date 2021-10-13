import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateMovieUser extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeMovieusermovietitle =
      this.onChangeMovieusermovietitle.bind(this);
    this.onChangeMovieusercustomername =
      this.onChangeMovieusercustomername.bind(this);
    this.onChangeMovieuserphonenumber =
      this.onChangeMovieuserphonenumber.bind(this);
    this.onChangeMovieuserdaterented =
      this.onChangeMovieuserdaterented.bind(this);
    this.onChangeMovieuserdatereturned =
      this.onChangeMovieuserdatereturned.bind(this);
    this.onChangeMovieuserrentalamount =
      this.onChangeMovieuserrentalamount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      movietitle: "",
      customername: "",
      phonenumber: "",
      daterented: "",
      datereturned: "",
      rentalamount: "",
    };
  }

  onChangeMovieusermovietitle(e) {
    this.setState({ movietitle: e.target.value });
  }
  onChangeMovieusercustomername(e) {
    this.setState({ customername: e.target.value });
  }
  onChangeMovieuserphonenumber(e) {
    this.setState({ phonenumber: e.target.value });
  }

  onChangeMovieuserdaterented(e) {
    this.setState({ daterented: e.target.value });
  }
  onChangeMovieuserdatereturned(e) {
    this.setState({ datereturned: e.target.value });
  }
  onChangeMovieuserrentalamount(e) {
    this.setState({ rentalamount: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const MovieuserObject = {
      movietitle: this.state.movietitle,
      customername: this.state.customername,
      phonenumber: this.state.phonenumber,
      daterented: this.state.daterented,
      datereturned: this.state.datereturned,
      rentalamount: this.state.rentalamount,
    };

    axios
      .post(
        "http://localhost:4000/Movieusers/create-movieuser",
        MovieuserObject
      )
      .then((res) => console.log(res.data));

    this.setState({
      movietitle: "",
      customername: "",
      phonenumber: "",
      daterented: "",
      datereturned: "",
      rentalamount: "",
    });
  }

  render() {
    return <div>hi</div>;
  }
}

{
  /* <div classmovietitle="form-wrapper">
  <Form onSubmit={this.onSubmit}>
    <Form.Group controlId="movietitle">
      <Form.Label>MovieTitle</Form.Label>
      <Form.Control
        type="text"
        value={this.state.movietitle}
        onChange={this.onChangeMovieusermovietitle}
      />
    </Form.Group>

    <Form.Group controlId="customername">
      <Form.Label>Customer Name</Form.Label>
      <Form.Control
        type="text"
        value={this.state.customername}
        onChange={this.onChangeMovieusercustomername}
      />
    </Form.Group>

    <Form.Group controlId="phonenumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        type="phonenumber"
        value={this.state.phonenumber}
        onChange={this.onChangeMovieuserphonenumber}
      />
    </Form.Group>

    <Form.Group controlId="daterented">
      <Form.Label>DateRented</Form.Label>
      <Form.Control
        type="daterented"
        value={this.state.daterented}
        onChange={this.onChangeMovieuserdaterented}
      />
    </Form.Group>

    <Form.Group controlId="datereturned">
      <Form.Label>Date Returned</Form.Label>
      <Form.Control
        type="text"
        value={this.state.datereturned}
        onChange={this.onChangeMovieuserdatereturned}
      />
    </Form.Group>
    <Form.Group controlId="rentalamount">
      <Form.Label>Rental Amount</Form.Label>
      <Form.Control
        type="text"
        value={this.state.rentalamount}
        onChange={this.onChangeMovieuserrentalamount}
      />
    </Form.Group>

    <Button variant="danger" size="lg" block="block" type="submit">
      Create Movieuser
    </Button>
  </Form>
</div>; */
}
