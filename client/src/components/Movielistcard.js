import React, { Component } from "react";
import { Button, Card, CardColumns, NavItem } from "react-bootstrap";
import axios from "axios";
import dayjs from "dayjs";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Date from "./Date";
import { useAuth0 } from "@auth0/auth0-react";

export default class Movielistcard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Setting up functions
    this.onChangeMovieusermovietitle =
      this.onChangeMovieusermovietitle.bind(this);
    this.onChangeMovieuserdaterented =
      this.onChangeMovieuserdaterented.bind(this);
    this.onChangeMovieuserdatereturned =
      this.onChangeMovieuserdatereturned.bind(this);
    this.onChangeMovieuserrentalamount =
      this.onChangeMovieuserrentalamount.bind(this);
    this.onChangeMovieusername = this.onChangeMovieusername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      movietitle: "",
      daterented: "",
      datereturned: "",
      rentalamount: "",
      noofdays: "0",
      totalamount: "0",
      dailyrental: this.props.obj.dailyrental,
      user: "",
    };
  }
  onChangeMovieuserdaterented(e) {
    this.setState({ daterented: this.state.startdate });
  }
  onChangeMovieuserdatereturned(e) {
    this.setState({
      datereturned: this.state.enddate,
    });
  }

  onChangeMovieusermovietitle(e) {
    this.setState({ movietitle: e.target.value });
  }

  onChangeMovieuserrentalamount(e) {
    this.setState({ rentalamount: e.target.value });
  }
  onChangeMovieusername(user) {
    this.setState({ user: user.name });
  }

  onSubmit(e) {
    e.preventDefault();
    const MovieuserObject = {
      user: this.state.user.name,
      movietitle: this.props.obj.name,
      daterented: this.state.daterented,
      datereturned: this.state.datereturned,
      rentalamount: this.props.obj.dailyrental * this.state.noofdays,
      noofdays: this.state.noofdays,
      dailyrental: this.props.obj.dailyrental,
    };

    axios
      .post(
        "http://localhost:4000/Movieusers/create-movieuser",
        MovieuserObject
      )
      .then((res) => console.log(res.data));
  }

  handledate = (values) => {
    const startdate = dayjs(values[0]);
    this.setState({ daterented: startdate });

    const enddate = dayjs(values[1]);
    this.setState({ datereturned: enddate });

    console.log(startdate, enddate);
    const days = enddate.diff(startdate, "days");
    this.setState({ noofdays: days });
  };

  handleclean = () => {
    this.setState({ rentalamount: "0" });
    this.setState({ noofdays: "0" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <CardColumns>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.obj.url} />
            <Card.Body>
              <Card.Title
                controlId="movietitle"
                type="text"
                value={this.props.obj.name}
                onChange={this.onChangeMovieusermovietitle}
              >
                {this.props.obj.name}
              </Card.Title>
              <Card.Text>Gener: {this.props.obj.gener}</Card.Text>
              <Card.Text
                controlId="rentalamount"
                type="text"
                value={this.state.rentalamount}
                onChange={this.onChangeMovieuserrentalamount}
              >
                One Day Price: ₹{this.props.obj.dailyrental}
              </Card.Text>
              <Card.Text>
                Avalable Quantity: {this.props.obj.noofcopies}
              </Card.Text>
              <Card.Text>
                <Date onok={this.handledate} clear={this.handleclean} />
              </Card.Text>
              <Card.Text>Number of days: {this.state.noofdays}</Card.Text>
              <Card.Text></Card.Text>
              <Card.Text>
                Total Amount: ₹
                {this.props.obj.dailyrental * this.state.noofdays}
              </Card.Text>
              <Card.Text>
                <Button variant="primary" type="submit" className="button-card">
                  Buy Now
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </form>
    );
  }
}
