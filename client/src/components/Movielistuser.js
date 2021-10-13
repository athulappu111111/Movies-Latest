import React, { Component } from "react";
import axios from "axios";
import { Card, CardColumns } from "react-bootstrap";
import Movielistcard from "./Movielistcard";

export default class Movielist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/movies/")
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataCard() {
    return this.state.movies.map((res, i) => {
      return <Movielistcard obj={res} key={i} />;
    });
  }

  render() {
    return (
      <CardColumns style={{ width: "75rem" }}>
        <Card.Body>{this.DataCard()}</Card.Body>
      </CardColumns>
    );
  }
}
