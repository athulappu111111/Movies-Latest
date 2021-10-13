import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class customerTableRow extends Component {
  constructor(props) {
    super(props);
    this.deletecustomer = this.deletecustomer.bind(this);
  }

  deletecustomer() {
    axios
      .delete(
        "http://localhost:4000/customers/delete-customer/" + this.props.obj._id
      )
      .then((res) => {
        console.log("customer successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.fname}</td>
        <td>{this.props.obj.lname}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.password}</td>
        <td>{this.props.obj.phoneno}</td>
        <td>
          <Link
            className="edit-link"
            to={"/edit-customer/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deletecustomer} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
