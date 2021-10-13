import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
// import { useGlobalFilter } from "react-table";
// import { Globalfilter } from "./Globalfilter";

export default class Movietablerow extends Component {
  constructor(props) {
    super(props);
    this.deletemovieuser = this.deletemovieuser.bind(this);
  }

  deletemovieuser() {
    axios
      .delete(
        "http://localhost:4000/movieusers/delete-movieuser/" +
          this.props.obj._id
      )
      .then((res) => {
        console.log("Details successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <tr>
          <td>{this.props.obj.movietitle}</td>
          <td>{this.props.obj.daterented}</td>
          <td>{this.props.obj.datereturned}</td>
          <td>{this.props.obj.dailyrental}</td>
          <td>{this.props.obj.noofdays}</td>
          <td>{this.props.obj.rentalamount}</td>

          <td>
            <Button onClick={this.deletemovieuser} size="sm" variant="danger">
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  }
}
